import React from "react";

export default function HeroSection() {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-20">
          <div className="flex flex-col flex-1/2 justify-center items-center gap-y-8">
            <h2 className="sm:text-[40px] text-3xl font-bold">
              خرید راحت فرش،در <span className="text-primary">ایران فرش</span>
            </h2>
            <p className="sm:text-2xl text-xl font-bold sm:w-[600px] w-[400px] text-center">
              با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و از
              تنوع بی نظیر فرش ها لذت ببر.
            </p>
            <div className="flex lg:gap-x-8 gap-x-2 items-center">
                <a href="" className="text-primary  sm:text-xl text-base font-bold border border-primary rounded-lg px-4 py-2"> محصولات ویژه ایرانی فرش</a>
                <a href="" className="text-white  sm:text-xl text-base font-bold bg-primary px-4 py-2 rounded-lg">عضویت در باشگاه مشتریان</a>
            </div>
          </div>
          <div className="flex-1/2 relative">
            <img src="images/carpets-group.png" alt="" className="w-full h-full"/>
            <svg
              width="87"
              height="20"
              viewBox="0 0 87 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-10 left-3"
            >
              <path
                d="M87 2L69.6848 1.5728L77.9724 16.7818L87 2ZM0.147184 3.23398C14.968 13.4768 27.1127 18.616 39.0251 19.3951C50.9422 20.1745 62.4057 16.575 75.8182 9.80056L74.4657 7.12274C61.2595 13.793 50.364 17.1303 39.2209 16.4015C28.0729 15.6724 16.456 10.8584 1.85282 0.76602L0.147184 3.23398Z"
                fill="#CB1B1B"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
