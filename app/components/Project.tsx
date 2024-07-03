"use client";
import { type ProjectDocumentData } from "@/prismicio-types";

import { PrismicLink } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { useBreakpoints } from "../utils/useBreakpoints";
import { VideoFile } from "./VideoFile";

gsap.registerPlugin(ScrollTrigger);

export function Project({
  project,
  index,
}: {
  project: ProjectDocumentData;
  index: number;
}) {
  const projectRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { isLg } = useBreakpoints();

  useEffect(() => {
    gsap.context(() => {
      const top = headerRef.current?.offsetHeight;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap\\:list",
          start: `top top+=${top}`,
          end: `bottom top+=${top}`,
          scrub: 0,
          // markers: true,
        },
      });

      tl.fromTo(
        ".gsap\\:status",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
        }
      );
    }, projectRef);
  }, [isLg]);

  return (
    <div className="flex flex-col last:pb-0 bg-white" ref={projectRef}>
      <div
        className={clsx(
          "sticky top-0 mix-blend-difference z-10 p-sm",
          "grid grid-cols-2 gap-sm",
          "lg:gap-0 lg:px-0"
        )}
        ref={headerRef}
      >
        <div className="w-full flex flex-col gap-0.5 px-1">
          <h5 className="text-white">
            {project.title}, {project.type}.
          </h5>
          <p className="text-[#4b4b4b]">
            {project.credits && (
              <span>
                Credits to{" "}
                <PrismicLink field={project.credits} className="lowercase ">
                  {project.credits_title}
                </PrismicLink>{" "}
              </span>
            )}
            &#40;{project.year}&#41;
          </p>
        </div>
        <div className="">
          <PrismicLink
            field={project.website}
            className={clsx(
              "underline text-yellow w-auto h-auto px-1 cursor-pointer leading-none",
              "hover:bg-yellow hover:text-black"
            )}
          >
            {project.website_title}
          </PrismicLink>
        </div>
        <div
          className={clsx(
            "h-[2px] bg-grey absolute top-full left-0 right-0 scale-x-0 origin-left z-10 ",
            "gsap:status"
          )}
        ></div>
      </div>
      <ul
        className={clsx(
          "flex flex-col",
          "lg:grid lg:grid-cols-2 bg-white",
          "gsap:list"
        )}
      >
        {project.gallery &&
          project.gallery.map(
            (
              {
                media,
              }: {
                media: any;
              },
              index
            ) => (
              <li key={index} className="w-full flex flex-col">
                {media.kind == "image" ? (
                  <div className="relative">
                    <Image
                      src={media.url}
                      width={media.width}
                      height={media.height}
                      alt={project.title as string}
                    />
                  </div>
                ) : (
                  // <video
                  //   src={media.url}
                  //   muted
                  //   loop
                  //   autoPlay
                  //   className="h-auto"
                  // />
                  <VideoFile
                    url={media.url}
                    index={index}
                    length={project.gallery.length - 1}
                  />
                )}
              </li>
            )
          )}
      </ul>
    </div>
  );
}
