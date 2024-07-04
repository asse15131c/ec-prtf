"use client";
import { type ProjectDocumentData } from "@/prismicio-types";

import { PrismicLink } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { useBreakpoints } from "../utils/useBreakpoints";
import { VideoFile } from "./VideoFile";

gsap.registerPlugin(ScrollTrigger);

export function Project({
  project,
}: {
  project: ProjectDocumentData;
  index: number;
}) {
  const projectRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline()).current;

  // const open = useRef<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { isLg } = useBreakpoints();

  const onClick = () => {
    gsap.context(() => {
      tl.to(".gsap\\:videofile", {
        paddingBottom: open ? "1%" : "116.54%",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.1,
      });
      // open.current = !open.current;
      setOpen((e) => !e);
    }, projectRef);
  };

  return (
    <div
      className="flex flex-col last:pb-0 bg-white cursor-pointer"
      ref={projectRef}
      onClick={onClick}
    >
      <div
        className={clsx(
          "sticky top-0 z-10 p-sm ",
          "grid grid-cols-2 gap-sm",
          "lg:gap-0 lg:px-0 bg-white",
          " hover:bg-grey"
          // "backdrop-blur-md bg-black/5"
          // "mix-blend-difference"
        )}
        ref={headerRef}
      >
        {/* <div
          className={clsx(
            "h-full bg-white absolute top-0 bottom-0 left-0 right-0 scale-x-0 origin-left z-0 backdrop-blur-md",
            "gsap:status"
          )}
        ></div> */}
        <div className="w-full flex flex-col gap-0.5 px-1 py-1 lg:py-0 relative z-10">
          <h5
            className={
              clsx()
              // "text-white"
            }
          >
            {project.title}, {project.type}.
          </h5>
          <p
            className={clsx(
              // "text-[#4b4b4b]",
              "text-darkgrey"
            )}
          >
            {project.credits && (
              <span>
                Credits to{" "}
                <PrismicLink
                  field={project.credits}
                  className={clsx(
                    "lowercase",
                    "hover:bg-darkgrey hover:text-white"
                  )}
                >
                  {project.credits_title}
                </PrismicLink>{" "}
              </span>
            )}
            &#40;{project.year}&#41;
          </p>
        </div>
        <div className="relative z-10 flex justify-between px-1 items-start">
          <PrismicLink
            field={project.website}
            className={clsx(
              "underline text-blue w-auto h-auto cursor-pointer leading-none pt-0.5 pb-[2px]",
              "hover:bg-blue hover:text-white"
            )}
          >
            {project.website_title}
          </PrismicLink>
          <button className="underline shine h-auto hover:bg-black hover:text-white pt-0.5 pb-[2px]">
            [{open ? "Close" : "Open"}]
          </button>
        </div>
        <div
          className={clsx(
            "h-[4px] bg-white absolute top-full left-0 right-0 scale-x-0 origin-left z-10 backdrop-blur-md",
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
