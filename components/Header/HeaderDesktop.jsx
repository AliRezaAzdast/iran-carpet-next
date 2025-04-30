import React from "react";
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { MdLogin } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function HeaderDesktop() {
  return (
    <header className="hidden md:flex">
      <div className="container">
        <div className="flex justify-between mt-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-5">
              <h1 className="font-bold text-primary text-2xl">ایران فرش</h1>
              <form className="flex items-center gap-4 px-3 w-100 h-10 rounded-lg bg-neutral3">
                <CiSearch className="w-6 h-6 text-neutral9" />
                <input type="text"  className="border-0 focus:ring-0 text-lg text-neutral9 h-10 bg-neutral3" placeholder="جستجو فرش"/>
              </form>
            </div>
            <ul className="flex gap-x-10 text-black font-bold">
            <li className="text-primary ">
                <Link href='/'>صفحه اصلی</Link>
             </li>
             <li className="hover:text-primary hover:border-b border-primary">
                <a href="">وبلاگ</a>
             </li>
             <li className="hover:text-primary hover:border-b border-primary">
                <a href="">تماس با ما</a>
             </li>
             <li className="hover:text-primary hover:border-b border-primary">
                <a href="">درباره ما</a>
             </li>            
            </ul>
          </div>
          <div className="flex items-start gap-x-3">
            <Link
              href='/shoppingcart'
              className="flex items-center gap-x-2 h-10 font-bold text-lg hover:bg-primary hover:text-white  text-primary border border-primary px-3 py-1 rounded-lg"
            >
              <MdOutlineShoppingCart className="h-6 w-6" />
            </Link>
            <Link 
              href='/signin'
              className="flex items-center gap-x-2 h-10 font-bold text-lg hover:bg-primary hover:text-white  text-primary border border-primary px-3 py-1 rounded-lg"
            >
              <MdLogin className="h-6 w-6" />
              ورود/ثبت نام
            </Link>
          </div>
        </div>
        <span className="inline-block bg-neutral6 w-full h-[1px]"></span>
      </div>
    </header>
  );
}
