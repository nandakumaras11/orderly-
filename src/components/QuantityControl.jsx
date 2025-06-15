import React from 'react';

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="shrink-0">
            <div className="flex items-center gap-2 text-[#171312]">
                <button
                    className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer"
                    onClick={onDecrease}
                >
                    -
                </button>
                <input
                    className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    value={quantity}
                    readOnly
                />
                <button
                    className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer"
                    onClick={onIncrease}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantityControl;