"use client";

import { IndexDocument } from "@/prismicio-types";
import gsap from "gsap";
import { SplitText } from "gsap/src/all";
import { Header } from "./Header";
import { Project } from "./Project";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);
export function Home({ page }: { page: IndexDocument }) {
  // useEffect(() => {
  //   const texts = document.getElementsByClassName(`gsap:scrumble`);
  //   console.log(texts, "texts");
  //   Array.from(texts).forEach((text, index) => {
  //     function random(min: number, max: number) {
  //       return Math.random() * (max - min) + min;
  //     }
  //     var split = new SplitText(text);

  //     split.chars.forEach(function (_, i: number) {
  //       gsap.to(text, {
  //         opacity: 0,
  //         x: random(-500, 500),
  //         y: random(-500, 500),
  //         z: random(-500, 500),
  //         scale: 0.1,
  //         delay: i * 0.02,
  //         yoyo: true,
  //         duration: 2.5,
  //       });
  //     });
  //   });
  // }, []);

  return (
    <>
      <Header />
      <ul className="lg:col-span-2 relative z-1 gap-8">
        {page.data.projects.map(({ project }: any, index: number) => (
          <Project project={project.data} key={project.id} index={index + 1} />
        ))}
      </ul>
    </>
  );
}
