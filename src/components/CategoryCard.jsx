import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ id, image, name }) {
    const navigate = useNavigate();

    return (
        <div
            className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer"
            onClick={() => navigate(`/CategoryDetails/${id}`)}
        >
            <div className="flex items-center gap-4">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                    style={{ backgroundImage: `url("${image}")` }}
                />
                <p className="text-[#171212] text-base font-normal leading-normal flex-1 truncate">
                    {name}
                </p>
            </div>
            <div className="shrink-0">
                <div
                    className="text-[#171212] flex size-7 items-center justify-center"
                    data-icon="CaretRight"
                    data-size="24px"
                    data-weight="regular"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}