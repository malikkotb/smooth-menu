"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const projects = [
  { title: "2022 Quiz Arena", tag: "AR 2022" },
  { title: "Pastry Shop", tag: "UI/UX 2023" },
  { title: "PyTorch Image CNN", tag: "CNN 2023" },
  { title: "Note Taker 2024", tag: "UI/UX 2024" },
];

export default function Home() {
  const elementsRef = useRef([]);

  useEffect(() => {
    // const tl = gsap.timeline({defaults: { ease: "power4.inOut", duration: 0.3}})
    // tl.to(".bar", {
    //   width: 30,
    // });

    elementsRef.current.forEach((element, index) => {
      gsap.to(element, { width: 30 });
    });

    gsap.to(".tag", {
      y: 0,
      delay: 0.5,
    });
  });

  const hoverFunc = () => {
    // const tl = gsap.timeline();

    // tl.to(".bar", {
    //   width: 30,
    // });
  };

  return (
    <main className="bg-black opacity-80 h-screen m-0 flex items-center">
      <ul className="text-white text-4xl font-thin flex flex-col gap-12">
        {projects.map((p, index) => (
          <li key={index} onMouseEnter={hoverFunc}>
            <div className="relative flex items-center justify-between">
              <div className="bar"></div>
              <a href="#" className=" ">
                {p.title}
              </a>
            </div>
            <div className="mask">
              <p className="tag">{p.tag}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
