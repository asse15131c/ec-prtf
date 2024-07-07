"use client";

import { type IndexDocument } from "@/prismicio-types";

import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

import { Header } from "./Header";
import { Project } from "./Project";

gsap.registerPlugin(CustomEase, useGSAP);

CustomEase.create("custom.standard", "0.76, 0, 0.24, 1");
CustomEase.create("custom.expo", "0.87, 0, 0.13, 1");
CustomEase.create("custom.scroll", "0.25, 1, 0.5, 1");

export function Home({ page }: { page: IndexDocument }) {
  const ref = useRef(null!);
  const tl = useRef(gsap.timeline()).current;
  const [hasLoadingEnded, setHasLoadingEnded] = useState<boolean>(false);
  const projects = page.data.projects;
  const projectRefs = useMemo(
    () => projects.map(() => createRef<HTMLLIElement>()),
    [projects]
  );

  useGSAP(
    () => {
      tl.fromTo(
        ".gsap\\:videofile",
        {
          paddingBottom: "116.54%",
        },
        {
          paddingBottom: "1%",
          duration: 1.6,
          ease: "expo.inOut",
          delay: 0.8,
          stagger: 0.1,
        }
      );
      tl.add(() => {
        setHasLoadingEnded(true);
      });

      // setHasLoadingEnded(true);
    },
    {
      scope: projectRefs[0],
      dependencies: [],
    }
  );

  return (
    <>
      <Header />
      <ul ref={ref} className="lg:col-span-2 relative z-1 gap-8">
        {projects.map(({ project }: any, index: number) => (
          <li key={project.id}>
            <Project
              ref={projectRefs[index]}
              project={project.data}
              index={index + 1}
              hasLoadingEnded={hasLoadingEnded}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
