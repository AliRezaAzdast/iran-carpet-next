import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { PiInstagramLogoThin } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-neutral2 py-10 mt-20">
      <div className="container">
        <div className="flex gap-y-5 xl:gap-y-0 flex-col-reverse xl:flex-row xl:items-start items-center xl:justify-between">
          <div className="text-xl text-neutral9">
            <div className="mb-5">
              <h2 className="text-2xl text-primary font-bold mb-3">
                ایـــرانی فرش
              </h2>
              <p className="text-neutral10 w-100 sm:w-140 xl:w-120">
                با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع
                و با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از
                فروش حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش
                یک خرید آسان و لذت بخش را تجربه کنید.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl text-neutral10 mb-4">
                  تلفن پشتیبانی: 0212544
                </p>
                <div className="flex items-center gap-x-2">
                  <FaLinkedin className="h-6 w-6 hover:text-blue-900" />
                  <LiaTelegram className="h-6 w-6 hover:text-blue-400" />
                  <PiInstagramLogoThin className="h-6 w-6 hover:text-pink-600" />
                </div>
              </div>
              <img src="./public/images/footer.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between gap-x-20">
            <div>
              <p className="text-2xl text-neutral10 border-b border-[#EDEDED]">
                فرش های دست بافت
              </p>
              <ul>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    لوکس
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    قدیمی
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    مدرن
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl text-neutral10 border-b border-[#EDEDED]">
                فرش های ماشینی
              </p>
              <ul>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    لوکس
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    قدیمی
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    مدرن
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl text-neutral10 border-b border-[#EDEDED]">
                سایر فرش ها
              </p>
              <ul>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    لوکس
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    قدیمی
                  </a>
                </li>
                <li>
                  <a href="" className="text-xl text-neutral9">
                    مدرن
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
