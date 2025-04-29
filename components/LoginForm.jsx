import FloatingLabelInput from "@/components/FloatingLabelInput";
import Link from 'next/link';
import React from 'react';


export default function SinginForm() {
    return (
      <div className="container mt-10 relative">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex flex-col flex-1/2 bg-white p-20 md:p-0 border border-neutral6 md:border-0 rounded-3xl items-center z-10 justify-center">
            <h1 className="text-primary text-3xl">ایران فرش</h1>
            <p className="text-primary text-xl my-4">ثبت نام</p>
            <form action="">
              <FloatingLabelInput label='شماره موبایل' id='شماره موبایل' type="number" />  
              <FloatingLabelInput label='ایجاد رمز عبور' id='ایجاد رمز عبور' type="password" />
              <button type="submit" className="w-60 xl:w-80 text-lg cursor-pointer bg-primary rounded-lg text-white mt-4 py-2">ثبت نام</button>
            </form>
            <p className="mt-4 text-lg">
            ثبت نام نکرده اید؟همین حالا 
            <Link href='/signin' className="text-primary px-2">عضو</Link>
            شوید
            </p>
          </div>
          <img src="/images/singin.png" alt="" className="flex-1/2 rounded-3xl w-full -top-10 invisible sm:visible absolute md:static md:w-100 xl:w-200"/>
        </div>
      </div>
    );
  }