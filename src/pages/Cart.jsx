import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Add this import


export default function Cart() {
    const navigate = useNavigate(); // Add this hook
    const [quantity, setQuantity] = useState(1);

    const handleClose = () => {
        navigate(-1); // This navigates back to the previous page
    };


    return (
        <div
            className="container relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <div
                        className="text-[#171312] flex size-12 shrink-0 items-center cursor-pointer" // Add cursor-pointer
                        data-icon="X"
                        data-size="24px"
                        data-weight="regular"
                        onClick={handleClose} // Add onClick handler
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
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
                {/* <div className="flex gap-4 bg-white px-4 py-3 justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex items-start gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASJiI7ygt3rpihSXktPMlqn9qgsJSbhzZPM4CdPOTY3yhMhd2LC80t0ngcuRx_THwWPXHt86iKtLxLnpdBSR-wdynrbJBHuNWHRwxYR1jBWbg3l_w4pVl6eMmmSa5kn4hLWdWC-qIm5BatlMO-8ukk8lhsKyYpbXhtrVLBO3ZiQ4F9Qv_p8vRcaQVUQ5rQaWf1GKuzZ-cGjk2asxV7VB1ZYfKnzkhMN6xy3uv3BqNcnGP0n08MEr3g7yPI4s_PrAscgKbfoxzwKOs")'
                            }}
                        ></div>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-[#171312] text-base font-medium leading-normal">
                                Spicy Chicken Sandwich
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                $6.99
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                Regular
                            </p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <QuantityControl
                            quantity={quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            maxQuantity={99}
                        />
                    </div>
                </div> */}
                {/* <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate">
                        Add Notes
                    </p>
                    <div className="shrink-0">
                        <div
                            className="text-[#171312] flex size-7 items-center justify-center"
                            data-icon="PencilSimple"
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
                                <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                            </svg>
                        </div>
                    </div>
                </div> */}
                <div className="flex gap-4 bg-white px-4 py-3 justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex items-start gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyrnAQ9lZE2KHs-H3_36GiiGMoQoqScXw6Mjuv3EvED9qDZt4yAoLzSVBdqF0Z95B6Ub2QHdHcDuD-M5hYMmdsq7Bm8QCLpE-36ZUjceRIzt335A4mI1aqn6EilDlATGpGwdhoriqNThRkR6qXUmRSysTVMyEHG7GH2Iayzsi-zqxkgTx25o6CdreV7dbEhQbZRYdixhP-ryEDSRfSG6Q6QsyrED2Ek7kn5zbZ7DXCWsl-inCTnbAkzhDdir3upAZKgrdvzDcdWfU")'
                            }}
                        ></div>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-[#171312] text-base font-medium leading-normal">
                                Fries
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                $3.49
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                Large
                            </p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <div className="flex items-center gap-2 text-[#171312]">
                            <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer">
                                -
                            </button>
                            <input
                                className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                type="number"
                                defaultValue={1}
                            />
                            <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate">
                        Add Notes
                    </p>
                    <div className="shrink-0">
                        <div
                            className="text-[#171312] flex size-7 items-center justify-center"
                            data-icon="PencilSimple"
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
                                <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 bg-white px-4 py-3 justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex items-start gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida.public/AB6AXuAqcYdcyUho1KedGFPCGlfEMDABwZLl6JOx2dO1tl4VKMmLNQM0g8qBB7N_zRovwlecqILnPo9nSg51_J8srwVF7NJs8MmAWoBVvkcc76xYsY-w4DbWcsxJKPITiSZKQWhtEP53ePQEVQ6fBNHsuv6AMkY7u3bZvvhpklf0p_Gg6nYx0NKJ-PxsQUG4-dczuqBywSSYo5HeRNva7EnKAo__8_Et8U2YrkgosvMKNzTI_Hs7GTq6R6NdcBzXSsQIL3DfXp3elc7dq-I")'
                            }}
                        ></div>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-[#171312] text-base font-medium leading-normal">
                                Coke
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                $2.99
                            </p>
                            <p className="text-[#836c67] text-sm font-normal leading-normal">
                                Regular
                            </p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <div className="flex items-center gap-2 text-[#171312]">
                            <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer">
                                -
                            </button>
                            <input
                                className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                type="number"
                                defaultValue={1}
                            />
                            <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f1] cursor-pointer">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate">
                        Add Notes
                    </p>
                    <div className="shrink-0">
                        <div
                            className="text-[#171312] flex size-7 items-center justify-center"
                            data-icon="PencilSimple"
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
                                <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <h3 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Order Summary
                </h3>
                <div className="p-4">
                    <div className="flex justify-between gap-x-6 py-2">
                        <p className="text-[#836c67] text-sm font-normal leading-normal">
                            Subtotal
                        </p>
                        <p className="text-[#171312] text-sm font-normal leading-normal text-right">
                            $20.97
                        </p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                        <p className="text-[#836c67] text-sm font-normal leading-normal">Tax</p>
                        <p className="text-[#171312] text-sm font-normal leading-normal text-right">
                            $1.50
                        </p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                        <p className="text-[#836c67] text-sm font-normal leading-normal">
                            Delivery Fee
                        </p>
                        <p className="text-[#171312] text-sm font-normal leading-normal text-right">
                            $2.00
                        </p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between gap-x-6 py-2">
                        <p className="text-[#836c67] text-sm font-normal leading-normal">
                            Total
                        </p>
                        <p className="text-[#171312] text-sm font-normal leading-normal text-right">
                            $24.47
                        </p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white sm:relative">
                <div className="flex px-4 py-3">
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#edc3ba] text-[#171312] text-base font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Checkout</span>
                    </button>
                </div>
                <div className="h-5 bg-white" />
            </div>
        </div>

    )
}
