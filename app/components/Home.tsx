"use client";

import { type IndexDocument } from "@/prismicio-types";

import gsap from "gsap";
import { SplitText } from "gsap/src/all";

import { Header } from "./Header";
import { Project } from "./Project";

gsap.registerPlugin(SplitText);

export function Home({ page }: { page: IndexDocument }) {
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
