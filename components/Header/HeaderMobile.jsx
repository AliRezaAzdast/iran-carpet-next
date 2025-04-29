"use client"
import React, {useState} from "react";
import { VscThreeBars } from "react-icons/vsc";
import { MdLogin } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdNewspaper } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";
import { MdClose } from "react-icons/md";


export default function HeaderMobile() {
    const [navOpenClose, setNavOpenClose] = useState(false)


    const navOpen = () => {
        setNavOpenClose(true)
    }
    const navClose = () => {
        setNavOpenClose(false)
    }

  return (
    <>
      <div className="mt-2 md:hidden">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div onClick={navOpen} className="flex items-center justify-center text-black bg-neutral3 p-2 rounded-lg">
                <VscThreeBars className=" w-5 h-5" />
              </div>
              <h1 className="text-primary font-bold">ایـــرانی فرش</h1>
            </div>
            <div className="flex gap-x-2">
              <a
                href="#"
                className="flex items-center justify-center text-primary border border-primary p-2 rounded-lg"
              >
                <MdLogin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-primary border border-primary p-2 rounded-lg"
              >
                <MdOutlineShoppingCart className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 px-3 h-10 rounded-lg bg-neutral3 mt-3">
            <CiSearch className="w-6 h-6 text-neutral9" />
            <p className="text-sm text-neutral9">جستجو فرش</p>
          </div>
        </div>
        <span className="inline-block bg-neutral3 w-full h-[1px]"></span>
      </div>
      <div className={`fixed top-0 ${navOpenClose ? 'right-0' : '-right-60'} bottom-0 w-45 p-4 bg-white h-full  md:hidden z-30 transition-all`}>
        <div className="flex items-center justify-between mb-3 border-b pb-3 border-neutral6">
        <h3 className="text-primary font-bold">ایـــرانی فرش</h3>
        <div onClick={navClose}>
        <MdClose/>
        </div>
        </div>
        <ul className="font-bold text-sm *:mb-2">
            <li>
                <a href="#" className="flex items-center gap-x-2 text-primary"><FaHome/>صفحه اصلی</a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-x-2"><MdNewspaper/>وبلاگ</a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-x-2"><BsFillTelephoneOutboundFill/>تماس با ما</a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-x-2"><FaBuildingUser/>درباره ما</a>
            </li>
        </ul>
      </div>
      <div onClick={navClose} className={`overlay ${navOpenClose ? 'visible opacity-100' : 'invisible opacity-0'} md:hidden fixed inset-0 w-full h-full bg-black/40 z-20 transition-all`}></div>

    </>
  );
}
