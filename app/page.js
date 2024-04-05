"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const projects = ["2022 Quiz Arena", "FoodPal Vue App", "PyTorch Image CNN", "2024 Note Taker"];

export default function Home() {
  const tl = gsap.timeline();

  useEffect(() => {
    // const tl = gsap.timeline({defaults: { ease: "power4.inOut", duration: 0.3}})
    // tl.to(".bar", {
    //   width: 30,
    // });
  });

  const hoverFunc = () => {
    tl.to(".bar", {
      width: 30,
    });
  }

  return (
    <main className="bg-black opacity-80 h-screen m-0 flex items-center">
      <ul className="text-white text-4xl font-thin flex flex-col gap-12">
        {projects.map((p, index) => (
          <li key={index} onMouseEnter={hoverFunc}>
            <div className="bar"></div>
            <a href="#" className=" ">{p}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
