import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdShortcut } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

export default function Comments() {
  return (
    <div className="container mt-20">
      <h3 className="text-xl font-bold mb-5">دیدگاه ها و امتیاز</h3>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-x-3">
            <img
              src="/images/avatar/1.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <p className=" font-bold">علیرضا کریمی</p>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-[#737993] text-xs">۵روزپیش</span>
            <CiHeart className="h-5 w-5 text-comments" />
            <MdShortcut className="h-5 w-5 text-comments" />
            <PiDotsThreeBold className="h-5 w-5 text-comments" />
          </div>
        </div>
        <span className="inline-block bg-[#E9EAEE] mr-19 w-6/7 h-0.5"></span>
        <div className="mr-19 mt-3">
          <span className="flex items-center rounded-lg w-fit px-3 py-1 bg-[#F3F5F6] text-[#737993]">
            <IoIosStar className="w-4 h-4 text-yellow" /> ۴
          </span>
          <p className="text-sm text-comments mt-5">
          فرش مناسب و زیبایی بود از  رنگ و طرحش خیلی خوشم اومد.
          </p>
        </div>
        <span className="inline-block bg-[#f8f8f8] mr-19 w-full h-0.5"></span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-x-3">
            <img
              src="/images/avatar/2.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <p className=" font-bold">مبین فرازمند</p>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-[#737993] text-xs">۵روزپیش</span>
            <CiHeart className="h-5 w-5 text-comments" />
            <MdShortcut className="h-5 w-5 text-comments" />
            <PiDotsThreeBold className="h-5 w-5 text-comments" />
          </div>
        </div>
        <span className="inline-block bg-[#E9EAEE] mr-19 w-6/7 h-0.5"></span>
        <div className="mr-19 mt-3">
          <span className="flex items-center rounded-lg w-fit px-3 py-1 bg-[#F3F5F6] text-[#737993]">
            <IoIosStar className="w-4 h-4 text-yellow" /> ۴
          </span>
          <p className="text-sm text-comments mt-5">
          خرید از ایرانی فرش واسم همیشه جذاب بوده و هست.
          </p>
        </div>
        <span className="inline-block bg-[#f8f8f8] mr-19 w-full h-0.5"></span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-x-3">
            <img
              src="/images/avatar/3.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <p className=" font-bold">احمد کنشلو</p>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-[#737993] text-xs">۵روزپیش</span>
            <CiHeart className="h-5 w-5 text-comments" />
            <MdShortcut className="h-5 w-5 text-comments" />
            <PiDotsThreeBold className="h-5 w-5 text-comments" />
          </div>
        </div>
        <span className="inline-block bg-[#E9EAEE] mr-19 w-6/7 h-0.5"></span>
        <div className="mr-19 mt-3">
          <span className="flex items-center rounded-lg w-fit px-3 py-1 bg-[#F3F5F6] text-[#737993]">
            <IoIosStar className="w-4 h-4 text-yellow" /> ۴
          </span>
          <p className="text-sm text-comments mt-5">
          ایرانی فرش هم قیمتاش خوبه و هم کیفیت فرش هایی که میفروشه
          </p>
        </div>
        <span className="inline-block bg-[#f8f8f8] mr-19 w-full h-0.5"></span>
      </div>
    </div>
  );
}
