"use client"
import { useEffect } from "react";
import gsap from "gsap/gsap-core";

export default function Home() {

  useEffect(() => {
    const tl = gsap.timeline()
    // const tl = gsap.timeline({defaults: { ease: "power4.inOut", duration: 0.3}})
    tl.to(".bar", {
      width: "100px"
    })
  
  })

  return (
    <main className="bg-black opacity-80 h-screen m-0 flex items-center">
        <ul className="text-white text-4xl font-thin flex flex-col gap-12">
          <li><div className="bar bg-white h-[1px] w-0"></div><a href="#" className=" ml-16">2022 Quiz Arena</a></li>
          <li><a href="#" className=" ml-16">2024 Note Taker</a></li>
          <li><a href="#" className=" ml-16">FoodPal Vue App</a></li>
          <li><a href="#" className="ml-16">PyTorch Image CNN</a></li>
        </ul>
    </main>
  );
}
