import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categoriesData } from '../data/categoryData';
import { foodDataMap } from '../data/foodData';
import FoodCard from '../components/FoodCard';

export default function CategoryDetails() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const category = categoriesData.find(cat => cat.id === categoryId);

    // Filter foods based on category
    const categoryFoods = Object.values(foodDataMap).filter(food => food.category === categoryId);

    if (!category) return <div>Category not found</div>;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container relative flex size-full min-h-screen flex-col bg-white">
            <div className="flex items-center bg-white p-4 pb-2 justify-between">
                <div
                    className="text-[#171312] flex size-12 shrink-0 items-center cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                    </svg>
                </div>
                <h2 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                    {category.name}
                </h2>
            </div>

            {categoryFoods.length > 0 ? (
                <div className="flex flex-wrap gap-4 p-4">
                    {categoryFoods.map(food => (
                        <FoodCard
                            key={food.id}
                            id={food.id}
                            image={food.images[0]}
                            name={food.name}
                            price={food.basePrice}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center flex-1 px-4 py-8">
                    <div className="bg-gray-100 rounded-full p-6 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="#9CA3AF"
                            viewBox="0 0 256 256"
                        >
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                        </svg>
                    </div>
                    <h3 className="text-[#171312] text-lg font-semibold mb-2">
                        No Items Available
                    </h3>
                    <p className="text-gray-500 text-center text-sm">
                        Sorry, there are currently no items available in this category.
                    </p>
                </div>
            )}
        </div>
    );
}