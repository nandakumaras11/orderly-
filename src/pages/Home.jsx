import React from 'react'

export default function Home() {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path>
        </svg>
      </div>
      <h2 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Orderly
      </h2>
      <div className="flex w-12 items-center justify-end">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#171212] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
          <div
            className="text-[#171212]"
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
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
          <div
            className="text-[#82686a] flex border-none bg-[#f4f1f1] items-center justify-center pl-4 rounded-l-xl border-r-0"
            data-icon="MagnifyingGlass"
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
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <input
            placeholder="Search for food"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-full placeholder:text-[#82686a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            defaultValue=""
          />
        </div>
      </label>
    </div>
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
    <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Popular Dishes
    </h2>
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMKDzDpLxMT2hshJ3bB5AE71-40lUMSNejdQf5AyTZai0A4sBM4aU9Yd5BmD6qGr1uJj8wVJQgqGzoES9b-lMX4dL2LuKApQRLAYMJhRcngoQbNcODJpcQj4D6JnNGJK8DisSqj_zkSII0E3SlUiIi49QELktjFUC93r1xMF-tZL-msPrUHZ0oiQqZQiroincWFBGJM9HCRw1Ad6FKh3agSU4_5vzIgJrXItstMpN8cmjB9xrvbnb5rBv-OHl7VD2QisjbFA3lVq0")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Margherita Pizza
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $12.99
            </p>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJHlJbul42TQohE6-fM-3ezbNxUDFBqx4LjArY-Q_M8hdaEaXO-2nEKm1N_Q6xjKUIv0fftMpevAxke7-YgNZ4q1k5fPg6Amexl7JBQ65pzKo2sGKVTX5-mMbB8emTuci5KFwiKKWOC2Dc8FkdbE0rfVr-g4d27WVMDJsuKad2JFNrGWp29ZAj5PNGA928RuZ4yeb6Hg8ZwIw_EqprlZOVc6ejmn83DAF5MbFjUWMqBDrIapvzH8oc8cjytXdE0iUWIDK7gQtAQSw")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Classic Burger
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $9.99
            </p>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5RCiHUANFtK2kjNNZEKoJbms4HWx6f1C5bWesE3G23nDlwzkYo_N1u0bGXJZRGo9N6dRNVJQLfC5nkDqDUo1r_kwmKZBPo_XlJc3xw3C2d75wE9mz-I3xfYXWlnkgLal0wGKDcGRnGmBeOJvpElhxN7HM-f8PcWFQFzv3NXFLaeT7m0aJ2aV11C_NUQlFLmQ3eJkmwidWckRKw30EpX7raRw5qoKflM0aHWSQ-CgxbNQ6aldPzTssj4Dv4Z24Ujw30KA7UjHZWrU")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Sushi Platter
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $15.99
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Today's Specials
    </h2>
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcYinT_tNxQAjMhG89jTWvmaaS95_Qiz8yq5if5QxzxUqPo9X5bo3nh2SP5oDJb3rKMK0nWxqF8W9GZBF3mi_cL_dp2_QfEgytF4sBdmSpT8X2UHElLexOFyWNwdtT8_ZY_mcWdt9Qw4YysloijyObe-JjhWd_BUoZgYV5rTJ2glapCJTQu4HQq2-dZwMmDxCi4HNQT7SeMy1pUo7XJDGb2-9Vphz1SJzO8c2C-GkWyYAyPAeOgMvgyas5bOVrtAuAeqP3FRGLkoA")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Caesar Salad
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $8.99
            </p>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1mK07vui-VxPEsbcURcnET0EIzR_kFpV6Nq5dPwKxFHKgnvgX1wFQouqfvobXEpvVCMLMkGWxhv0LSzmCwBAvZpYLsHq7zi1TYiGprqoGzUDT2ZpcqGn1hKUF3GgDv-SQUrwINJ2hrFOT4Wt8pa5HLHaqgIK7CbQLdSO_HqwUaCkHcyDprNzTwm80hhyrNEBTkz5co2RetUD_7zJDahHUchCEcVI6U1dn4cckjXQkCd6w50WCf01D1pWqRac0RzbHJPc7Oc8H8bA")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Spaghetti Carbonara
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $14.99
            </p>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVplIk3hX6YA2XsCDfVrB-jg3BUiXgoEM25Wls_eOzZ-1Ozbj7GVkddfJ_jBHWd6z-LsqozXHlgpfEynusfZxmxP7OxJNRoiDn8Irq8p-567vKiTnD2QICbCMwKeZoi0tiADcrWW6OovBt8MXDzIzH7vj4_YkmiL9GFzTVFndv6MM2UDnCSMQ8pqIq0T8rKNVYXLkflkdoTP49T6SwGUB46Pca4emMBllFr1jY3IN_7Y001W9u8WA1GladEzAdCXEHuoW0epn-QvM")'
            }}
          ></div>
          <div>
            <p className="text-[#171212] text-base font-medium leading-normal">
              Grilled Steak
            </p>
            <p className="text-[#82686a] text-sm font-normal leading-normal">
              $19.99
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Categories
    </h2>
    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDADiIcQJBmDMfp95SRRYfLd5nfK7bgvZLcozVrhZN0ynMvetiBKYUBB56pISvugNQfJax_p81f9tbnk-lXp4cjrHGBKmBXQmX1CAXaBC2CRP__frLYkAcCEBeLlYjin9yBEhjLIKLUtR4_f6U0-G_0qWxOqNfTMJgPgyvJ_Ud1sI2uBXVoatvcvN74NQRszeXE74E8JugEH6Hi4cX_a3rLYBPDw_LYeiAFzYvhTAvg9ILb9GmQmAkWEtecJexvO7Wc0b3e52Fh4Nk")'
          }}
        ></div>
        <p className="text-[#171212] text-base font-normal leading-normal flex-1 truncate">
          Appetizers
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
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3mxO5swddcR4mO6D32FGb1G0e3c9RtAfWox58GDbHYbFHWzAvQIV_FV7mepFxDM2LgQuJKLNsdqBqvmOKHSHa4YcQeY9D81VaJPIbDeDdDLuRV34Fo67id2nxo2SEZPdj4Id1QFDKMlUUjaUY5nxwqcbW9EFgOSgZyqT2IoWjQkKXDPOBNEIcDzWmeFX4XXZimkwrxo7I6NjGNu9PPU9jP7vF4EJodhTfyHaHSMnCgHXm71imVSkbCPjyLq1LS2NeQeJOtLgdh-8")'
          }}
        ></div>
        <p className="text-[#171212] text-base font-normal leading-normal flex-1 truncate">
          Main Courses
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
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuDk-yR5OO_7iwBHl-VSFoiuMcBl5DUT9vkTSRqqyXENpvz1ihLt31D6BV7GOcoxb4V99b719DTlhO5XQUy4vbk5SZ43LBy_si8-PIkQOBcffJtWffSHZhQLNEittGp_M2Q1J3UcLmsEDjP9ASR9VSFMeXJzG_dTDqyAhk0rvFCZFIXzw4TcfoBgBtSha776VyageGfOiMZ-WbHlbjk_o4n2L8bxFOZxN2Jj05Wxz-Ctfp3wdvhNi432-CUyTzTdF_tb5XZ4WyryA")'
          }}
        ></div>
        <p className="text-[#171212] text-base font-normal leading-normal flex-1 truncate">
          Desserts
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
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJAAg2lwFz9gBOFU_v_bHh4x8C3LY3ak6voKufQxL7mkntPTN0kwqvLXcjbirhOwe-I9LcsXW8twO-5cxPWITZLV56bm-3OF96SJGffd4XFDv-vSm5nkvCMA9SlMRaeLTOymuuVDjERq3hSo1d-hz3sX-ssq9lJRJEeKpB8t3QJfxUe1nsm7Anrk4mG3eryfgP2u5cyOkN8fMxdFzsNM3xs-6IDN3VVeP_bztspHmAy07_jQecmBDEKjP0WNQMkFMpL6sNvxnvTjo")'
          }}
        ></div>
        <p className="text-[#171212] text-base font-normal leading-normal flex-1 truncate">
          See All
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
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex gap-2 border-t border-[#f4f1f1] bg-white px-4 pb-safe pt-2 fixed bottom-0 left-0 right-0">
    <a
      className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#171212]"
      href="#"
    >
      <div
        className="text-[#171212] flex h-8 items-center justify-center"
        data-icon="House"
        data-size="24px"
        data-weight="fill"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
        </svg>
      </div>
      <p className="text-[#171212] text-xs font-medium leading-normal tracking-[0.015em]">
        Home
      </p>
    </a>
    <a
      className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#82686a]"
      href="#"
    >
      <div
        className="text-[#82686a] flex h-8 items-center justify-center"
        data-icon="ShoppingCart"
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
          <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
        </svg>
      </div>
      <p className="text-[#82686a] text-xs font-medium leading-normal tracking-[0.015em]">
        Cart
      </p>
    </a>
  </div>
  {/* Add padding to main content to prevent overlap with fixed navigation */}
  <div className="pb-[72px]" />
</div>

    )
}
