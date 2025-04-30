import React from "react";
import DetailBox from "./DetailBox";

import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import { BiSolidStar } from "react-icons/bi";

export default function ProductDetail() {
  return (
    <div className="container mt-10">
      <div className="flex items-center gap-x-3 text-xl mb-5">
        <div className="flex items-center gap-x-2 text-primary">
          <AiOutlineHome className="lg:w-6 w-4 lg:h-6 h-4" />
          خانه
        </div> 
        <IoIosArrowBack className="w-4 lg:w-6 h-4 lg:h-6 text-neutral9" />
        <div className="text-primary">فرش ماشینی</div>
        <IoIosArrowBack className="w-4 lg:w-6 h-4 lg:h-6 text-neutral9" />
        <div className="text-neutral9">ماهساره</div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5 flex-wrap">
        <div>
          <img src="/images/carpets/5.png" alt="" className="w-full h-full" />
          <div className="lg:flex mt-3 gap-x-2 hidden lg:visible">
            <div className="flex items-center justify-center rounded-lg border border-neutral6 w-[100px] h-[100px]">
                <img src="/images/cc/3.png" alt=""className="w-20 h-20 rounded-lg" />
            </div>
            <div className="flex items-center justify-center rounded-lg border border-neutral6 w-[100px] h-[100px]">
                <img src="/images/cc/2.png" alt=""className="w-20 h-20 rounded-lg" />
            </div>
            <div className="flex items-center justify-center rounded-lg border border-neutral6 w-[100px] h-[100px]">
                <img src="/images/cc/1.png" alt=""className="w-20 h-20 rounded-lg" />
            </div>
            <div className="flex items-center justify-center relative rounded-lg border border-neutral6 w-[100px] h-[100px]">
                <TbDots className="absolute z-10"/>
                <img src="/images/cc/1.png" alt=""className="w-20 h-20 blur-xs rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal items-center md:items-start gap-y-3">
          <p className="font-bold text-primary hidden md:visible">
            فرش ماهساره / فرش ماشینی ماهساره
          </p>
          <p className="font-bold text-2xl">
            فرش ماشینی ماهساره طرح آترینا زمینه آبی
          </p>
          <span className="md:inline-block w-[380px] h-0.5 hidden md:visible bg-neutral6"></span>
          <div className="text-lg hidden lg:visible">
            <span className="ml-4">اندازه فرش:</span>
            <span>شش متری (۳۰۰* ۲۰۰)</span>
          </div>
          <p className="text-lg mt-3 hidden md:visible">ویژگی ها</p>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-3">
             <DetailBox t1='کیفیت فرش' t2='درجه یک'/>
             <DetailBox t1='رنگ زمینه' t2='آبی'/>
            </div>
            <div className="md:flex gap-x-3 hidden lg:visible">
            <DetailBox t1='شکل' t2='مستطیل'/>
            <DetailBox t1='جنس نخ پود' t2='پلی استر و پنبه'/>
            </div>
            <div className="md:flex gap-x-3 hidden lg:visible">
            <DetailBox t1='جنس نخ تار' t2='پلی استر و پنبه'/>
            <DetailBox t1='جنس نخ خاب' t2='اکلیریک هیت ست شده'/>       
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-3">
            <button className="border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white text-sm font-bold rounded-lg p-1.5 w-fit">مشاهده همه ویژگی ها</button>
          </div>
          <span className="inline-block w-[380px] h-0.5 md:hidden visible bg-neutral6"></span>
        </div>
        <div className="flex flex-col w-full sm:w-fit items-start gap-y-4 sm:border p-0 sm:p-4 rounded-lg border-neutral6">
            <p className="font-bold">فروشنده</p>
            <p className="flex items-center gap-x-2 font-bold"><FaShop className="w-5 h-5"/>شرکت فرش سهند</p>
            <div className="text-sm font-bold">
                <span>عملکرد</span>
                <span className="text-emerald-500">عالی</span>
            </div>
            <div className="flex items-center gap-x-2 font-bold text-sm">
                <BiSolidStar className="text-yellow-500 w-5 h-5"/>
                <span>۴.۶</span>
            </div>
            <span className="bg-neutral6 h-0.5 w-full sm:w-72"></span>
            <div className="flex justify-between w-full font-bold">
                <span>قیمت:</span>
                <span>۱۳/۵۰۰/۰۰۰</span>
            </div>
            <div className="flex w-full">
                <button className="text-white bg-primary cursor-pointer hover:text-primary hover:bg-white border border-primary font-semibold rounded-lg w-full p-1">افزودن به سبد خرید</button>
            </div>
        </div>
      </div>
    </div>
  );
}
