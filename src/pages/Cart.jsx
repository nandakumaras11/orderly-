import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import CartItem from '../components/CartItem';

export default function Cart() {
    const navigate = useNavigate();
    const {
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        isEmpty
    } = useCart();

    const handleClose = () => {
        navigate(-1);
    };
    console.log(items);

    return (
        <div className="container relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <div className="text-[#171312] flex size-12 shrink-0 items-center cursor-pointer"
                        onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                            viewBox="0 0 256 256">
                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                        Your Order
                    </h2>
                </div>
                <h3 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Items
                </h3>

                {isEmpty ? (
                    <div className="px-4 py-8 text-center text-[#836c67]">Your cart is empty.</div>
                ) : (
                    items.map(item => (
                        <CartItem
                            key={item.id}
                            {...item}
                            onIncrease={() => updateItemQuantity(item.id, item.quantity + 1)}
                            onDecrease={() => updateItemQuantity(item.id, item.quantity - 1)}
                            onRemove={() => removeItem(item.id)}
                        />
                    ))
                )}

                {/* Order Summary */}
                {!isEmpty && (
                    <div className="bg-white px-4 py-6">
                        <h3 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                            Order Summary
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <span className="text-[#171312] text-base font-normal">Subtotal</span>
                                <span className="text-[#171312] text-base font-medium">${cartTotal.toFixed(2)}</span>
                            </div>
                            {/* You can add delivery fee/tax here if needed */}
                            <div className="flex justify-between pt-3 border-t border-[#f4f1f1]">
                                <span className="text-[#171312] text-base font-bold">Total</span>
                                <span className="text-[#171312] text-base font-bold">${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Checkout Button */}
            {!isEmpty && (
                <div className="fixed bottom-0 left-0 right-0 bg-white">
                    <div className="flex px-4 py-3">
                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#edc3ba] text-[#171312] text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Checkout · ${cartTotal.toFixed(2)}</span>
                        </button>
                    </div>
                    <div className="h-5 bg-white"></div>
                </div>
            )}
        </div>
    );
}
