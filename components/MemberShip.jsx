import React from "react";

export default function MemberShip() {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex flex-col-reverse gap-y-5 lg:gap-y-0 lg:flex-row items-center justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl">عضویت در باشگاه مشتریان</h3>
            <span className="flex justify-center text-5xl text-primary"> ایـــرانی فرش</span>
            <p className="text-xl w-90 text-center my-5">با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و از امکان تحویل رایگان فرش های خود بهره مند شوید.</p>
            <a href="#" className="flex items-center justify-center border border-primary rounded-lg text-primary w-full h-10 font-bold">ایجاد عضویت</a>
          </div>
          <div>
            <img src="/images/fram.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
