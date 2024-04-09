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
    const links = gsap.utils.toArray("li a");

    links.forEach((link) => {
      // define a gsap timeline for each of the links
      // needs to be inside of the foreach, because
      // if it's outside, all the links will share the same timeline
      // -> if u hover over one link, it will animate all the other ones as well

      let linkTl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.6 } });

      const headingStart = link.querySelector(".primary");
      const headingEnd = link.querySelector(".secondary");
      const date = link.querySelector(".date");
      const line = link.querySelector(".line");

      linkTl
        .to(headingStart, {
          yPercent: -100,
        })
        .to(
          headingEnd,
          {
            yPercent: -50,
          },
          // use "<" for the animations (this one and the one before to start at the same time)
          "<"
        )
        .to(
          line,
          {
            scaleX: 1,
          },
          "<"
        )
        .to(
          date,
          {
            y: 0,
          },
          "<"
        );

      linkTl.pause();

      link.addEventListener("mouseenter", () => {
        linkTl.play();
      });
      link.addEventListener("mouseleave", () => {
        linkTl.reverse();
      });
    });
  });

  return (
    <div className="m-0 h-screen text-white bg-black opacity-80">
      <main className="w-full h-screen m-0 flex items-center">
        <section className="flex-1">
          <ul className="text-white text-4xl font-thin">
            {projects.map((p, index) => (
              <li key={index}>
                <a href="#">
                  <div className="heading-container">
                    <p className="primary">{p.title}</p>
                    <p className="secondary">{p.title}</p>
                  </div>
                  <p className="date">{p.tag}</p>
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
