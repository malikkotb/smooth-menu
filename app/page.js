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

  useEffect(() => {

  });

  return (
    <div className="m-0 h-screen text-white bg-black opacity-80">
      <main className="w-full h-screen m-0 flex items-center">
        <section className=" flex-1">
          <ul className="text-white text-4xl font-thin flex flex-col gap-12">
            {projects.map((p, index) => (
              <li key={index}>
                <a href="#">
                  <div className="heading-container">
                    <p className="primary">{p.title}</p>
                    <p className="secondary">{p.title}</p>
                  </div>
                  <p>{p.tag}</p>
                  <div className="line"></div>
                </a>

              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
