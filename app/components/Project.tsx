"use client";
import { type ProjectDocumentData } from "@/prismicio-types";

import { PrismicLink } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { VideoFile } from "./VideoFile";

gsap.registerPlugin(ScrollTrigger);

export const Project = forwardRef<
  HTMLLIElement,
  {
    project: ProjectDocumentData;
    index: number;
    hasLoadingEnded: boolean;
  }
>(function Project({ project, index, hasLoadingEnded }, forwardedRef) {
  // const ref = useRef(null!);
  const headerRef = useRef(null!);
  const tl = useRef(gsap.timeline()).current;

  const [open, setOpen] = useState<boolean>(false);

  const onClick = () => {
    console.log("forwardedRef", forwardedRef);
    gsap.context(() => {
      tl.clear();
      tl.to(".gsap\\:videofile", {
        paddingBottom: open ? "1%" : "116.54%",
        duration: open ? 1 : 1.2,
        ease: "custom.standard",
        stagger: 0.1,
      });
      setOpen((e) => !e);
    }, forwardedRef!);
  };

  return (
    <li
      className="flex flex-col last:pb-0 cursor-pointer"
      ref={forwardedRef}
      onClick={onClick}
    >
      <div
        tabIndex={0}
        className={clsx(
          "group/project",
          "sticky top-0 z-10 p-sm ",
          "grid grid-cols-2 gap-sm",
          "lg:gap-0 lg:px-0 bg-white",
          "hover:bg-grey",
          // "focus:bg-grey"
          {
            "is-loading": !hasLoadingEnded && index === 1,
          }
        )}
        ref={headerRef}
      >
        <div className="w-full flex flex-col gap-0.5 lg:px-1 py-1 lg:py-0 relative z-10">
          <h5>
            {project.title}, {project.type}.
          </h5>
          <p className={clsx("text-darkgrey")}>
            {project.credits && (
              <span>
                Credits to {project.credits_title}{" "}
                {/* Credits to{" "}
                <PrismicLink
                  field={project.credits}
                  className={clsx(
                    "lowercase",
                    "hover:bg-darkgrey hover:text-white"
                  )}
                >
                  {project.credits_title}
                </PrismicLink>{" "} */}
              </span>
            )}
            &#40;{project.year}&#41;
          </p>
        </div>
        <div className="relative z-10 flex justify-between lg:px-1 items-start">
          <PrismicLink
            field={project.website}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
            className="peer/website"
          >
            {project.website_title}
          </PrismicLink>
          <button
            className={clsx(
              "text-blue underline h-auto pt-0.5 pb-[2px]",
              "group-[.is-loading]/project:bg-blue group-[.is-loading]/project:text-white group-[.is-loading]/project:animate-blink",
              "group-hover/project:bg-blue group-hover/project:text-white group-hover/project:animate-blink",
              "peer-hover/website:animate-none peer-hover/website:bg-transparent peer-hover/website:text-blue"
              // "group-focus/project:bg-blue group-focus/project:text-white group-focus/project:animate-blink"
            )}
          >
            [{open ? "Close project" : "View project"}]
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
              videoIndex
            ) => (
              <li
                key={index + "_" + videoIndex}
                className="w-full flex flex-col"
              >
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
                    hasLoadingEnded={hasLoadingEnded}
                    url={media.url}
                    index={videoIndex}
                    projectIndex={index}
                    length={project.gallery.length - 1}
                  />
                )}
              </li>
            )
          )}
      </ul>
    </li>
  );
});
