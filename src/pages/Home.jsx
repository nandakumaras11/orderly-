import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { foodDataMap } from '../data/foodData';
import SearchResults from '../components/SearchResults';
import CallButton from '../components/CallButton';
import FoodCard from '../components/FoodCard'
import { categoriesData } from '../data/categoryData';
import CategoryCard from '../components/CategoryCard';
import BottomNavigation from '../components/BottomNavigation';
export default function Home() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

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

    const popularDishes = [
        {
            id: "margherita-pizza",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMKDzDpLxMT2hshJ3bB5AE71-40lUMSNejdQf5AyTZai0A4sBM4aU9Yd5BmD6qGr1uJj8wVJQgqGzoES9b-lMX4dL2LuKApQRLAYMJhRcngoQbNcODJpcQj4D6JnNGJK8DisSqj_zkSII0E3SlUiIi49QELktjFUC93r1xMF-tZL-msPrUHZ0oiQqZQiroincWFBGJM9HCRw1Ad6FKh3agSU4_5vzIgJrXItstMpN8cmjB9xrvbnb5rBv-OHl7VD2QisjbFA3lVq0",
            name: "Margherita Pizza",
            price: "12.99"
        },
        {
            id: "classic-burger",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJHlJbul42TQohE6-fM-3ezbNxUDFBqx4LjArY-Q_M8hdaEaXO-2nEKm1N_Q6xjKUIv0fftMpevAxke7-YgNZ4q1k5fPg6Amexl7JBQ65pzKo2sGKVTX5-mMbB8emTuci5KFwiKKWOC2Dc8FkdbE0rfVr-g4d27WVMDJsuKad2JFNrGWp29ZAj5PNGA928RuZ4yeb6Hg8ZwIw_EqprlZOVc6ejmn83DAF5MbFjUWMqBDrIapvzH8oc8cjytXdE0iUWIDK7gQtAQSw",
            name: "Classic Burger",
            price: "9.99"
        },
        {
            id: "sushi-platter",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5RCiHUANFtK2kjNNZEKoJbms4HWx6f1C5bWesE3G23nDlwzkYo_N1u0bGXJZRGo9N6dRNVJQLfC5nkDqDUo1r_kwmKZBPo_XlJc3xw3C2d75wE9mz-I3xfYXWlnkgLal0wGKDcGRnGmBeOJvpElhxN7HM-f8PcWFQFzv3NXFLaeT7m0aJ2aV11C_NUQlFLmQ3eJkmwidWckRKw30EpX7raRw5qoKflM0aHWSQ-CgxbNQ6aldPzTssj4Dv4Z24Ujw30KA7UjHZWrU",
            name: "Sushi Platter",
            price: "15.99"
        }
    ];

    const todaysSpecials = [
        {
            id: "caesar-salad",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcYinT_tNxQAjMhG89jTWvmaaS95_Qiz8yq5if5QxzxUqPo9X5bo3nh2SP5oDJb3rKMK0nWxqF8W9GZBF3mi_cL_dp2_QfEgytF4sBdmSpT8X2UHElLexOFyWNwdtT8_ZY_mcWdt9Qw4YysloijyObe-JjhWd_BUoZgYV5rTJ2glapCJTQu4HQq2-dZwMmDxCi4HNQT7SeMy1pUo7XJDGb2-9Vphz1SJzO8c2C-GkWyYAyPAeOgMvgyas5bOVrtAuAeqP3FRGLkoA",
            name: "Caesar Salad",
            price: "8.99"
        },
        {
            id: "spaghetti-carbonara",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1mK07vui-VxPEsbcURcnET0EIzR_kFpV6Nq5dPwKxFHKgnvgX1wFQouqfvobXEpvVCMLMkGWxhv0LSzmCwBAvZpYLsHq7zi1TYiGprqoGzUDT2ZpcqGn1hKUF3GgDv-SQUrwINJ2hrFOT4Wt8pa5HLHaqgIK7CbQLdSO_HqwUaCkHcyDprNzTwm80hhyrNEBTkz5co2RetUD_7zJDahHUchCEcVI6U1dn4cckjXQkCd6w50WCf01D1pWqRac0RzbHJPc7Oc8H8bA",
            name: "Spaghetti Carbonara",
            price: "14.99"
        },
        {
            id: "grilled-steak",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVplIk3hX6YA2XsCDfVrB-jg3BUiXgoEM25Wls_eOzZ-1Ozbj7GVkddfJ_jBHWd6z-LsqozXHlgpfEynusfZxmxP7OxJNRoiDn8Irq8p-567vKiTnD2QICbCMwKeZoi0tiADcrWW6OovBt8MXDzIzH7vj4_YkmiL9GFzTVFndv6MM2UDnCSMQ8pqIq0T8rKNVYXLkflkdoTP49T6SwGUB46Pca4emMBllFr1jY3IN_7Y001W9u8WA1GladEzAdCXEHuoW0epn-QvM",
            name: "Grilled Steak",
            price: "19.99"
        }
    ];


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
                        <div className="flex overflow-x-auto overflow-y-hidden [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3 snap-x snap-mandatory">
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[280px] sm:min-w-60 snap-start">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmvwxWvc_D8VzHshFZV7emvN4_3l7curnrgXnSkt13p_e7LJtjin2HUew2mEaa5M6ef4ZuAkIrYcCy7QhFhdBdu4iS5N0mOkbBUSD-ns4rgU4wQII3TV5V8rjOazX92NJmQxkgn4Waf_mg7tL02OQQ9S8PB7KLA4WYWmpH61Q9JOQ8fvzKw1OIqSahjFm4PD3jv_UysNvlRRFRd6JypMmqIPjPC0cBdsVzN00U_OArgZHrAFVIKgW2ptXDbKhVgIP7WMneJZVW2KI")'
                                        }}
                                    ></div>
                                    <p className="text-[#171212] text-base font-medium leading-normal">
                                        Special Offer: 20% off on all orders
                                    </p>
                                </div>
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[280px] sm:min-w-60 snap-start">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3QavMI08d0smFEHoRk33PFOEJjep5hiWIyIm7hr0KWeB8mUpr2j0IlsYPzK99nWSc5ibdNeI8x0MtIua9oDVu4-HSBWvW-YUUnBE3FrDjSe_eIdKC1S1KTZwyVXLgUUElJ7U6vQ7sp7XWpr_GGzz5vMbusMf1TLobJyv51imXhg25mufDufbV0LKpxNBZ6eQbH9efk3IZ2Hk8SFg5PejPuLZLPrcJLU6B_DOWhgZ_rAULvqBNpSR0dNVY1Y9FR6Oru14EzQm-V0k")'
                                        }}
                                    ></div>
                                    <p className="text-[#171212] text-base font-medium leading-normal">
                                        New Menu Items Available
                                    </p>
                                </div>
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[280px] sm:min-w-60 snap-start">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVhzclkXNks-xR04C5mrhR5brx3Khmg479zbI6Z3Gd7mW0NC9_rmoSua0Dr_tdhbdV_QPfcFFvkwuC7AfcAH6urcwIririA-EVY0I375yHyFN7YXrVfqo_BUejRKR5gFBYRwd9Sk5A5bU5cr5G0wBCJr3aC-6_mlzSevtFVoar_ETBL_txEmGKG-ODr40mZL-nEN9O644VFbYIN5qYoihancSugqR9z7ptCq4cRgFibxhoHtqMnWO2zoJEq9YOgItYBdlZ0ywg3LE")'
                                        }}
                                    ></div>
                                    <p className="text-[#171212] text-base font-medium leading-normal">
                                        Featured Dish: Chef's Special
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Popular Dishes Section */}
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Popular Dishes
                        </h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                {popularDishes.map((dish, index) => (
                                    <FoodCard
                                        key={dish.id}
                                        id={dish.id}
                                        image={dish.image}
                                        name={dish.name}
                                        price={dish.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Today's Specials Section */}
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Today's Specials
                        </h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                {todaysSpecials.map((dish, index) => (
                                    <FoodCard
                                        key={dish.id}
                                        id={dish.id}
                                        image={dish.image}
                                        name={dish.name}
                                        price={dish.price}
                                    />
                                ))}
                            </div>
                        </div>
                        <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Categories
                        </h2>
                        {categoriesData.map((category) => (
                            <CategoryCard
                                key={category.id}
                                id={category.id}
                                image={category.image}
                                name={category.name}
                            />
                        ))}
                    </>
                )}
            </div>
            <BottomNavigation />

            {/* Add padding to main content to prevent overlap with fixed navigation */}
            <div className="pb-[72px]" />
        </div>

    )
}
