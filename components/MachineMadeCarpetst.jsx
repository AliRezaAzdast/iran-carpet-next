import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import {mechinemadecarpet} from '@/data/data'
import ProductCards from './ProductCards'

export default function MachineMadeCarpet() {
  return (
    <div className="container">
        <section className='mt-20'>
            <div className='flex items-center justify-between mb-5'>
                <h4 className='font-bold text-2xl '>فرش های دستبافت</h4>
                <a href="" className='flex items-center justify-center gap-x-2 px-5 py-2 text-lg hover:text-white hover:bg-primary text-primary border border-primary rounded-lg'>مشاهده  همه<LuArrowLeft className='h-6 w-6'/></a>
            </div>
            <div className='flex items-center justify-between gap-x-4 overflow-x-auto no-scrollbar touch-auto overscroll-contain'>
              {mechinemadecarpet.map(items => (
                <ProductCards key={items.id} {...items}/>
              ))}
            </div>
        </section>
    </div>
  )
}
