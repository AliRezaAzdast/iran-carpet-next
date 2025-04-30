import React from "react";
import ProductDetail from "@/components/product/ProductDetail";
import HandowndSell from '@/components/HandowndSell'
import Comments from "@/components/product/Comments";

export default function Product() {
  return (
    <>
      <ProductDetail />
      <HandowndSell/>
      <Comments/>
    </>
  );
}
