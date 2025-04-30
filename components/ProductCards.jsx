import React from "react";
import { LuArrowLeft } from "react-icons/lu";
import {handowndSell} from '@/data/data'

export default function ProductCards({ title, img, price}) {
  return (
    <div className="border border-neutral5 p-3 rounded-lg">
      <img src={img} className="w-70" alt="" />
      <p className="text-lg my-3 w-60">{title}</p>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm">قیمت:</span>
        <span className="text-lg">{new Intl.NumberFormat('fa-IR').format(price)} تومان</span>
      </div>
      <a
        href=""
        className="flex hover:bg-primary hover:text-white items-center justify-center mx-2 py-1 rounded-lg text-primary font-bold text-sm border border-primary"
      >
        مشاهده بیشتر
      </a>
    </div>
  );
}
