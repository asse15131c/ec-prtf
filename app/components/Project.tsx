"use client";
import { type ProjectDocumentData } from "@/prismicio-types";

import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { VideoFile } from "./VideoFile";

gsap.registerPlugin(ScrollTrigger);

export const Project = forwardRef<
  HTMLDivElement,
  {
    project: ProjectDocumentData;
    index: number;
    hasLoadingEnded: boolean;
  }
>(function Project({ project, index, hasLoadingEnded }, forwardedRef) {
  const headerRef = useRef(null!);
  const tl = useRef(gsap.timeline()).current;
  const [open, setOpen] = useState<boolean>(index === 1);
  const loadedItems = useRef<Array<number>>([]);

  const onLoaded = (videoIndex: number) => {
    loadedItems.current[videoIndex] = videoIndex;

    if (loadedItems.current.length === project.slices.length && index === 1) {
      const event = new Event("assets-loaded");
      window.dispatchEvent(event);
    }
  };

  const onClick = () => {
    gsap.context(() => {
      tl.clear();
      tl.to(".gsap\\:videofile", {
        paddingBottom: open ? "1%" : "116.54%",
        duration: open ? 1 : 1.2,
        ease: "custom.standard",
        stagger: 0.1,
        onComplete: () => {
          if (open) {
            setOpen((e) => !e);
          }
        },
        onStart: () => {
          if (!open) {
            setOpen((e) => !e);
          }
        },
      });
    }, forwardedRef!);
  };

  useEffect(() => {
    if (hasLoadingEnded) {
      setOpen(false);
    }
  }, [hasLoadingEnded]);

  return (
    <div
      className={clsx("flex flex-col cursor-pointer")}
      ref={forwardedRef}
      onClick={onClick}
    >
      <div
        tabIndex={0}
        className={clsx(
          "group/project",
          "sticky top-0 z-10 p-sm",
          "grid grid-cols-2 gap-sm",
          "lg:gap-0 lg:px-0 bg-white",
          "hover:bg-grey",
          {
            "is-loading": !hasLoadingEnded && index === 1,
          }
        )}
        ref={headerRef}
      >
        <div className="w-full flex flex-col lg:px-1 relative z-10">
          <h5 className="mb-0.5">
            {project.title}, {project.type}.
          </h5>
          <p className={clsx("text-darkgrey")}>
            {project.credits && (
              <span>Credits to {project.credits_title} </span>
            )}
            &#40;{project.year}&#41;
          </p>
          <PrismicLink
            field={project.website}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
            className="peer/website md:hidden"
          >
            {project.website_title}
          </PrismicLink>
        </div>
        <div className="relative z-10 flex justify-end md:justify-between lg:px-1 items-start">
          <PrismicLink
            field={project.website}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
            className="peer/website hidden md:inline-block"
          >
            {project.website_title}
          </PrismicLink>
          <button
            className={clsx(
              "text-black bg-grey px-sm h-auto pb-px",
              "group-[.is-loading]/project:bg-blue group-[.is-loading]/project:text-white group-[.is-loading]/project:animate-blink",
              "group-hover/project:bg-blue group-hover/project:text-white group-hover/project:animate-blink",
              "peer-hover/website:animate-none peer-hover/website:bg-transparent peer-hover/website:text-blue"
              // "group-focus/project:bg-blue group-focus/project:text-white group-focus/project:animate-blink"
            )}
          >
            {open ? "Close" : "View"}
          </button>
        </div>
        {/* <div
          className={clsx(
            "h-[4px] bg-white absolute top-full left-0 right-0 scale-x-0 origin-left z-10 backdrop-blur-md",
            "gsap:status"
          )}
        ></div> */}
      </div>
      {/* <ul
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
                    open={open}
                  />
                )}
              </li>
            )
          )}
      </ul> */}
      <ul
        className={clsx(
          "flex flex-col",
          "lg:grid lg:grid-cols-2 bg-white min-h-0",
          "gsap:list"
        )}
      >
        {project.slices &&
          project.slices.map(
            (
              {
                primary,
                slice_type,
              }: {
                primary: {
                  line: any;
                  main: any;
                };
                slice_type: string;
              },
              videoIndex
            ) => (
              <VideoFile
                key={index + "_" + videoIndex}
                hasLoadingEnded={hasLoadingEnded}
                url={primary.main.url}
                lineUrl={primary.line.url}
                index={videoIndex}
                projectIndex={index}
                length={project.slices.length - 1}
                open={open}
                onLoaded={() => onLoaded(videoIndex)}
              />
            )
          )}
      </ul>
    </div>
  );
});
