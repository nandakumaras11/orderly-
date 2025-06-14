import React, { useState } from "react";

// JSON structure for food details
const foodData = {
    name: "Pasta Primavera",
    basePrice: 12.99,
    description:
        "A vibrant medley of fresh seasonal vegetables tossed with al dente pasta in a light, creamy sauce.",
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5IofT_GD9VOw5IDbCyO29MBC4MPgYrq_xLnQRatbRosGUNSaSSMQV8BRkWOAA9Jk8aorzjh-zH7FgKnhTK7myeJbkDdTZvayFOMQET0UhVsBRl15H2-D3TEb6O2ywmHwIQwt55em00At6eu5m2itDvg_RKypTuhT2TOoB__OymMgsTTNCGth66KoCKrWAO2S8sqJ3my4TkUoEjzMlOEmq63usQ1oSLsxLBSTz_hGTRjBotNUyl247BV3lqrfGLdHsa6x6GiH9OhQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDwKvwb8yTzwZga2fIHeBqGBRkkInWaZMF3j-HZLLF3AG_HmVq-WvPQTquLObKg1M8xdYum4-NH2-_ZXCa8rXw_i3_Uig-bYEg_5a4FPgLp4UR_xD5mQfalnofW2NqqSAt_qOn1gYymaBwrpCx1gJ1PNN58spaWJnK-EIncH_EB-a8YTZB_zkkIsUy4tjxI8hl7yIONd4HWTDAvXK-YXYT12TF-AGNekr2FDrwIGX6I7lVZCnkXyRNr-cDe8tYqQ_lWBSIi2t1hmh8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAeeB5ENMW0cYOvmo-9WBnP3rS3IisJeSQyjRXSNbnFXIuDuFV2eMlZGRqS4pl_ZIkxw3olVqRJ_2baVON-XF_-nWCSDC_GxCc_RX9JmBJI0tilYp4J2tfcCPYwAG6f_G2luKDe-F4D-NthVaBhcqiVVJUHeFh5P3FsOggXgk1eb32ueXRLikExAwQDD1N1b7WLSggvRV9MX6Xjx2DO4PgytFzOgCbSopdJWTE_rS-u-702ZuSVn-X4WhJ3r6mrV3o8cpc_qsOiauA"
    ],
    // Portion prices as multipliers of base price
    portions: [
        { label: "Full", value: "Full", multiplier: 1 },
        { label: "Half", value: "Half", multiplier: 0.6 },
        { label: "1/3", value: "1/3", multiplier: 0.4 },
        { label: "1/4", value: "1/4", multiplier: 0.3 }
    ],
    ingredients: [
        "Pasta",
        "Carrots",
        "Zucchini",
        "Bell Peppers",
        "Cream",
        "Parmesan Cheese",
        "Garlic",
        "Herbs",
        "Olive Oil"
    ],
    preparation:
        "Fresh vegetables are lightly sauteed with garlic and herbs, then tossed with perfectly cooked pasta and a creamy Parmesan sauce.",
    allergens: ["Milk", "Gluten", "Seafood", "Nuts", "Soy"],
    tasteProfile: ["Salty", "Umami"]
};

const FoodDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedPortion, setSelectedPortion] = useState(foodData.portions[0].value);

    // Find the selected portion object
    const portionObj = foodData.portions.find(p => p.value === selectedPortion);
    const price = (foodData.basePrice * (portionObj?.multiplier || 1)).toFixed(2);

    return (
        <>
            <div
                className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
            >
                <div>
                    <div className="flex items-center bg-white p-4 pb-2 justify-between">
                        <div
                            className="text-[#171312] flex size-12 shrink-0 items-center"
                            data-icon="ArrowLeft"
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
                                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
                            ORDERLY
                        </h2>
                        <div className="flex w-12 items-center justify-end">
                            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#171312] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                                <div
                                    className="text-[#171312]"
                                    data-icon="Phone"
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
                                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex w-full">
                            {foodData.images.map((img, idx) => (
                                <div key={idx} className="flex-none w-full sm:w-1/2 md:w-1/3 snap-center p-2">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                        style={{ backgroundImage: `url("${img}")` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            {foodData.images.map((_, idx) => (
                                <div key={idx} className="w-2 h-2" />
                            ))}
                        </div>
                    </div>
                    <h1 className="text-[#171312] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
                        {foodData.name}
                    </h1>
                    <p className="text-[#836c67] text-sm font-normal leading-normal pb-3 pt-1 px-4">
                        ${price}
                    </p>
                    <p className="text-[#171312] text-base font-normal leading-normal pb-3 pt-1 px-4">
                        {foodData.description}
                    </p>
                    <div className="flex px-4 py-3">
                        <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#f4f1f1] p-1">
                            {foodData.portions.map((portion, idx) => (
                                <label
                                    key={portion.value}
                                    className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#171312] text-[#836c67] text-sm font-medium leading-normal"
                                >
                                    <span className="truncate">{portion.label}</span>
                                    <input
                                        type="radio"
                                        name="portion"
                                        className="invisible w-0"
                                        value={portion.value}
                                        checked={selectedPortion === portion.value}
                                        onChange={() => setSelectedPortion(portion.value)}
                                        readOnly
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Ingredients
                    </h3>
                    <div className="flex gap-3 p-3 overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex flex-nowrap">
                            {foodData.ingredients.map((ingredient) => (
                                <div
                                    key={ingredient}
                                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f1f1] px-4"
                                >
                                    <p className="text-[#171312] text-sm font-medium leading-normal whitespace-nowrap">
                                        {ingredient}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-[#171312] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Preparation
                    </h3>
                    <p className="text-[#171312] text-base font-normal leading-normal pb-3 pt-1 px-4">
                        {foodData.preparation}
                    </p>
                    <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                        <div
                            className="text-[#171312] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-10"
                            data-icon="Warning"
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
                                <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
                            </svg>
                        </div>
                        <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate">
                            Contains: {foodData.allergens.join(", ")}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                        <div
                            className="text-[#171312] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-10"
                            data-icon="Palette"
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
                                <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path>
                            </svg>
                        </div>
                        <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate">
                            Taste Profile: {foodData.tasteProfile.join(", ")}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                        <p className="text-[#171312] text-base font-normal leading-normal flex-1 truncate" />
                    </div>
                    <div className="flex justify-stretch fixed rounded-t-lg bottom-0 left-0 right-0 bg-white shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f4f1f1] text-[#171312] text-base font-bold leading-normal tracking-[0.015em]"
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            >
                                <span className="truncate">- {quantity} +</span>
                            </button>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#edc3ba] text-[#171312] text-base font-bold leading-normal tracking-[0.015em] gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87Z" />
                                </svg>
                                <span className="truncate">Add Item</span>
                            </button>
                        </div>
                    </div>
                    <div className="h-5 bg-white" />
                </div>
            </div>
            <div className="pb-[84px]" />
        </>
    );
};

export default FoodDetails;