import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { foodDataMap } from '../data/foodData';
import SearchResults from '../components/SearchResults';
import CallButton from '../components/CallButton';
import FoodCard from '../components/FoodCard'
import CategoryCard from '../components/CategoryCard';
import BottomNavigation from '../components/BottomNavigation';
import useApi from '../utils/hooks/useApi'; // Make sure this import exists
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css';

export default function Home() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    // API state
    const { get } = useApi();
    const [homeData, setHomeData] = useState(null);
    const [apiLoading, setApiLoading] = useState(true); // <-- add this

    useEffect(() => {
        setApiLoading(true); // <-- set loading true before API call
        get('/home_page_data')
            .then((res) => {
                if (res) setHomeData(res);
            })
            .finally(() => setApiLoading(false)); // <-- set loading false after API call
    }, []);

    // Debounce search to improve performance
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const searchFoods = useCallback(
        debounce((query) => {
            setIsSearching(true);
            // Simulate search delay
            setTimeout(() => {
                setIsSearching(false);
            }, 300);
        }, 300),
        []
    );

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 2) {
            searchFoods(query);
        }
    };

    // Filter foods based on search query
    const searchResults = searchQuery.length > 2
        ? Object.values(foodDataMap).filter(food =>
            food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            food.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            food.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
        : [];

    // Use API data if available, fallback to empty arrays
    const banners = homeData?.banners || [];
    const popularDishes = homeData?.popular_dishes || [];
    const todaysSpecials = homeData?.todays_specials || [];
    const categories = homeData?.categories || [];
    useEffect(() => {
        console.log(banners, popularDishes, todaysSpecials, categories);

    })
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <div
                        className="text-[#171212] flex size-12 shrink-0 items-center"
                        data-icon="ForkKnife"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <img src="/logo.svg" alt="" />
                    </div>
                    <h2 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
                        Orderly
                    </h2>
                    <CallButton />
                </div>
                <div className="px-4 pb-3 pt-2">
                    <label className="relative flex w-full items-center">
                        <div className="flex h-12 w-full items-center overflow-hidden rounded-xl bg-[#f4f1f1]">
                            <div className="absolute left-3 flex items-center justify-center text-[#82686a]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>

                            {/* Search Input */}
                            <input
                                placeholder="Search for food"
                                className="h-full w-full bg-[#f4f1f1] pl-12 pr-10 text-base font-normal leading-normal text-[#171212] placeholder:text-[#82686a] focus:outline-none"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />

                            {/* Close Button */}
                            {searchQuery && (
                                <button
                                    className="absolute right-3 text-[#82686a] hover:text-[#171212] transition-colors"
                                    onClick={() => setSearchQuery('')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </label>
                </div>

                {/* Show search results or regular content */}
                {searchQuery.length > 2 ? (
                    <SearchResults
                        results={searchResults}
                        isLoading={isSearching}
                    />
                ) : (
                    <>
                        {/* Banners from API */}
                        <div className="flex overflow-x-auto overflow-y-hidden [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3 snap-x snap-mandatory">
                                {apiLoading ? (
                                    Array(2).fill(0).map((_, idx) => (
                                        <div key={idx} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[280px] sm:min-w-60 snap-start">
                                            <Skeleton height={120} borderRadius={12} />
                                            <Skeleton width={120} height={20} />
                                        </div>
                                    ))
                                ) : (
                                    banners.map((banner) => (
                                        <div
                                            key={banner.id}
                                            className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[280px] sm:min-w-60 snap-start"
                                        >
                                            <div
                                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                                                style={{
                                                    backgroundImage: `url("${banner.image_url}")`
                                                }}
                                            ></div>
                                            <p className="text-[#171212] text-base font-medium leading-normal">
                                                {banner.title}
                                                {banner.dish?.name ? `: ${banner.dish.name}` : ''}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        {/* Popular Dishes Section */}
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Popular Dishes
                        </h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                {apiLoading ? (
                                    Array(3).fill(0).map((_, idx) => (
                                        <div key={idx} className="w-40">
                                            <Skeleton height={100} borderRadius={12} />
                                            <Skeleton height={20} width={80} style={{ marginTop: 8 }} />
                                            <Skeleton height={16} width={60} />
                                        </div>
                                    ))
                                ) : (
                                    popularDishes.map((dish) => (
                                        <FoodCard
                                            key={dish.id}
                                            id={dish.id}
                                            image='/placeholderfood.png'
                                            name={dish.name}
                                            price={dish.base_price}
                                            description={dish.description}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Today's Specials Section */}
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Today's Specials
                        </h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                {apiLoading ? (
                                    Array(2).fill(0).map((_, idx) => (
                                        <div key={idx} className="w-40">
                                            <Skeleton height={100} borderRadius={12} />
                                            <Skeleton height={20} width={80} style={{ marginTop: 8 }} />
                                            <Skeleton height={16} width={60} />
                                        </div>
                                    ))
                                ) : todaysSpecials.length === 0 ? (
                                    <div className="text-[#82686a]">No specials for today</div>
                                ) : (
                                    todaysSpecials.map((item) => (
                                        <FoodCard
                                            key={item.id}
                                            id={item.id}
                                            image='/placeholderfood.png'
                                            name={item.name}
                                            price={item.base_price}
                                            description={item.description}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Categories
                        </h2>
                        <div>
                            {apiLoading ? (
                                Array(5).fill(0).map((_, idx) => (
                                    <div key={idx} className="flex items-center gap-3 mb-3">
                                        <Skeleton circle width={48} height={48} />
                                        <Skeleton width={100} height={20} />
                                    </div>
                                ))
                            ) : (
                                categories.map((category) => (
                                    <CategoryCard
                                        key={category.id}
                                        id={category.id}
                                        image='/placeholderfood.png'
                                        name={category.name}
                                    />
                                ))
                            )}
                        </div>
                    </>
                )}
            </div>
            <BottomNavigation />

            {/* Add padding to main content to prevent overlap with fixed navigation */}
            <div className="pb-[72px]" />
        </div>
    )
}
