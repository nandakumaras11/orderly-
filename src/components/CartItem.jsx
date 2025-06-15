import React from 'react';
import QuantityControl from './QuantityControl';

const CartItem = ({
    image,
    name,
    price,
    portion,
    quantity,
    onIncrease,
    onDecrease
}) => {
    return (
        <div className="flex gap-4 bg-white px-4 py-3 justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="flex items-start gap-4">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                    style={{
                        backgroundImage: `url("${image}")`
                    }}
                />
                <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[#171312] text-base font-medium leading-normal">
                        {name}
                    </p>
                    <p className="text-[#836c67] text-sm font-normal leading-normal">
                        &#8377;{price} - {portion}
                    </p>
                    <p className="text-[#171312] text-sm font-normal leading-normal cursor-pointer">
                        Add Note
                    </p>
                </div>
            </div>
            <QuantityControl
                quantity={quantity}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />
        </div>
    );
};

export default CartItem;