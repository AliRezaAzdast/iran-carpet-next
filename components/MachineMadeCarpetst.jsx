import React from 'react'
import { LuArrowLeft } from "react-icons/lu";

export default function MachineMadeCarpet() {
  return (
    <div className="container">
        <section className='mt-20'>
            <div className='flex items-center justify-between mb-5'>
                <h4 className='font-bold text-2xl '>فرش های دستبافت</h4>
                <a href="" className='flex items-center justify-center gap-x-2 px-5 py-2 text-lg text-primary border border-primary rounded-lg'>مشاهده  همه<LuArrowLeft className='h-6 w-6'/></a>
            </div>
            <div className='flex items-center justify-between gap-x-4 overflow-x-auto no-scrollbar touch-auto overscroll-contain'>
                <div className='border border-neutral5 p-3 rounded-lg'>
                    <img src="/images/carpets/5.png" className='w-70' alt="" />
                    <p className='text-lg my-3 w-60'>فرش کهن  دست بافت سهند زمینه سرمه ای </p>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm'>قیمت:</span>
                        <span className='text-lg'>۲۳۳/۰۰۰ تومان</span>
                    </div>
                    <a href="" className='flex hover:bg-primary hover:text-white items-center justify-center mx-2 py-1 rounded-lg text-primary font-bold text-sm border border-primary'>مشاهده  بیشتر</a>
                </div>
                <div className='border border-neutral5 p-3 rounded-lg'>
                    <img src="/images/carpets/6.png" className='w-70' alt="" />
                    <p className='text-lg my-3 w-60'>فرش دست بافت زانیس  طرح ماربل زمینه نوک مدادی</p>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm'>قیمت:</span>
                        <span className='text-lg'>۲۳۳/۰۰۰ تومان</span>
                    </div>
                    <a href="" className='flex hover:bg-primary hover:text-white items-center justify-center mx-2 py-1 rounded-lg text-primary font-bold text-sm border border-primary'>مشاهده  بیشتر</a>
                </div>
                <div className='border border-neutral5 p-3 rounded-lg'>
                    <img src="/images/carpets/7.png" className='w-70' alt="" />
                    <p className='text-lg my-3 w-60'>فرش کهن  دست بافت سهند زمینه سرمه ای </p>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm'>قیمت:</span>
                        <span className='text-lg'>۲۳۳/۰۰۰ تومان</span>
                    </div>
                    <a href="" className='flex hover:bg-primary hover:text-white items-center justify-center mx-2 py-1 rounded-lg text-primary font-bold text-sm border border-primary'>مشاهده  بیشتر</a>
                </div>
                <div className='border border-neutral5 p-3 rounded-lg'>
                    <img src="/images/carpets/8.png" className='w-70' alt="" />
                    <p className='text-lg my-3 w-60'>فرش دست بافت سهند طرح آترینا زمینه سورمه ای</p>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm'>قیمت:</span>
                        <span className='text-lg'>۲۳۳/۰۰۰ تومان</span>
                    </div>
                    <a href="" className='flex hover:bg-primary hover:text-white items-center justify-center mx-2 py-1 rounded-lg text-primary font-bold text-sm border border-primary'>مشاهده  بیشتر</a>
                </div>
                
            </div>
        </section>
    </div>
  )
}
