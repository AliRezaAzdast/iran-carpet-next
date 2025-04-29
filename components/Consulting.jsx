import React from "react";

export default function Consulting() {
  return (
    <>
      <div className="container px-0 lg:px-[20px]">
        <section className="flex items-center justify-between gap-x-3 mt-20 overflow-x-auto no-scrollbar touch-auto overscroll-contain">
          <div className="flex flex-col items-start p-4 bg-cover bg-center rounded-lg justify-end bg-[linear-gradient(269.67deg,rgba(1,48,117,0.8)_-96.09%,rgba(0,0,0,0)_99.55%),linear-gradient(270.11deg,rgba(2,47,113,0.6)_-99.67%,rgba(0,0,0,0)_99.78%),url(/images/consulting/1.png)] min-w-[300px] lg:w-115 h-[288px]">
            <h5 className="text-white text-xl">فرش های جدید</h5>
            <a
              href="#"
              className="text-white text-lg border border-white py-2 px-4 rounded-lg"
            >
              مشاهده و خرید فرش جدید
            </a>
          </div>
          <div className="flex flex-col items-start p-4 bg-cover bg-center rounded-lg justify-end bg-[linear-gradient(269.67deg,rgba(1,48,117,0.8)_-96.09%,rgba(0,0,0,0)_99.55%),linear-gradient(270.11deg,rgba(2,47,113,0.6)_-99.67%,rgba(0,0,0,0)_99.78%),url(/images/consulting/2.png)] min-w-[300px] lg:w-115 h-[288px]">
            <h5 className="text-white text-xl">فرش های رنگارنگ </h5>
            <a
              href="#"
              className="text-white text-lg border border-white py-2 px-4 rounded-lg"
            >
              مشاهده و خرید فرش رنگارنگ
            </a>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col items-start p-4 bg-cover bg-center rounded-lg justify-end bg-[linear-gradient(269.67deg,rgba(1,48,117,0.8)_-96.09%,rgba(0,0,0,0)_99.55%),linear-gradient(270.11deg,rgba(2,47,113,0.6)_-99.67%,rgba(0,0,0,0)_99.78%),url(/images/consulting/3.png)] min-w-80 xl:w-115 h-[144px]">
              <h5 className="text-white text-xl">پادری دستبافت</h5>
              <a
                href="#"
                className="text-white text-lg border border-white py-2 px-4 rounded-lg"
              >
                مشاهده و خرید پادری
              </a>
            </div>
            <div className="flex flex-col items-start p-4 bg-cover bg-center rounded-lg justify-end bg-[linear-gradient(269.67deg,rgba(1,48,117,0.8)_-96.09%,rgba(0,0,0,0)_99.55%),linear-gradient(270.11deg,rgba(2,47,113,0.6)_-99.67%,rgba(0,0,0,0)_99.78%),url(/images/consulting/4.png)] min-w-80 xl:w-115 h-[144px]">
              <h5 className="text-white text-xl">موکت اتاق</h5>
              <a
                href="#"
                className="text-white text-lg border border-white py-2 px-4 rounded-lg"
              >
                مشاهده و خرید موکت
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
