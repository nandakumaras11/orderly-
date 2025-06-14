import React from 'react';

export default function FoodCard({ image, name, price }) {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style={{
                    backgroundImage: `url("${image}")`
                }}
            ></div>
            <div>
                <p className="text-[#171212] text-base font-medium leading-normal">
                    {name}
                </p>
                <p className="text-[#82686a] text-sm font-normal leading-normal">
                    ${price}
                </p>
            </div>
        </div>
    );
}