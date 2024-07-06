"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export function VideoFile({
  hasLoadingEnded,
  url,
  index,
  projectIndex,
  length,
  open,
  lineUrl,
}: {
  hasLoadingEnded: boolean;
  url: string;
  index: number;
  projectIndex: number;
  length: number;
  open: boolean;
  lineUrl: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lineVideoRef = useRef<HTMLVideoElement>(null);
  const loaded = useRef<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.2,
  });

  const onPlay = () => {
    if (videoRef.current) {
      videoRef.current.removeEventListener("canplaythrough", onPlay);
      videoRef.current.setAttribute("data-lazy", "loaded");
    }

    if (lineVideoRef.current) {
      lineVideoRef.current.removeEventListener("canplaythrough", onPlay);
      lineVideoRef.current.setAttribute("data-lazy", "loaded");
    }

    // loaded.current = true;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", onPlay);
      return;
    }

    if (lineVideoRef.current) {
      lineVideoRef.current.addEventListener("canplaythrough", onPlay);
      return;
    }
  }, [lineVideoRef, videoRef]);

  useEffect(() => {
    // console.log("hasLoadingEnded", projectIndex, hasLoadingEnded);
    // console.log("videoRef", videoRef.current?.getAttribute("data-src"));

    // if ((open && !videoRef.current) || (!open && !lineVideoRef.current)) {
    //   return;
    // }

    if (projectIndex === 1) {
      if (videoRef.current) {
        videoRef.current.src = videoRef.current.dataset.src!;
        videoRef.current.setAttribute("preload", "auto");
        return;
      }
    }

    if (open) {
      if (videoRef.current) {
        videoRef.current.src = videoRef.current.dataset.src!;
        videoRef.current.setAttribute("preload", "auto");
        return;
      }
    }

    if (isIntersecting && hasLoadingEnded) {
      if (lineVideoRef.current) {
        lineVideoRef.current.src = lineVideoRef.current.dataset.src!;
        lineVideoRef.current.setAttribute("preload", "auto");
        return;
      }
    }
  }, [
    hasLoadingEnded,
    isIntersecting,
    lineVideoRef,
    projectIndex,
    videoRef,
    open,
  ]);

  useEffect(() => {
    // console.log(projectIndex, "open", open, videoRef.current);
    if (!videoRef.current) return;

    if (isIntersecting && open) {
      videoRef.current.play();
      // console.log(projectIndex, "play", open);
    } else if (!isIntersecting) {
      videoRef.current.pause();
      // console.log(projectIndex, "pause", open);
    }
  }, [isIntersecting, open, projectIndex, videoRef]);

  return (
    <div
      className={clsx(
        "relative h-0 transform-gpu overflow-hidden bg-black/10",
        "gsap:videofile",
        {
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index > 1 && index < length - 1 && length >= 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && index < length - 1 && index > 1 && length >= 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index <= 1 && length >= 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_-1px_0px_0px_rgba(255,255,255,1)] ":
            index % 2 == 0 && index <= 1 && length >= 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index >= length - 1 && length > 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && index >= length - 1 && length > 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_0px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && length <= 2,
          "shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_0px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && length <= 2,
        },
        // "pb-[116.54%]"
        {
          "pb-[6px]": projectIndex > 1,
          "pb-[116.54%]": projectIndex === 1,
        }
      )}
      ref={ref}
    >
      {open ? (
        <video
          ref={videoRef}
          // src={url}
          data-src={url}
          muted
          loop
          autoPlay
          playsInline
          webkit-playsinline="true"
          className={clsx(
            "w-full h-full object-cover transition-all duration-700 opacity-0 absolute inset-0",
            "data-[lazy=loaded]:opacity-100"
          )}
          preload="none"
        />
      ) : (
        <video
          ref={lineVideoRef}
          // src={lineUrl}
          data-src={lineUrl}
          muted
          loop
          autoPlay
          playsInline
          webkit-playsinline="true"
          className={clsx(
            "w-full h-full object-cover transition-all duration-700 opacity-0 absolute inset-0",
            "data-[lazy=loaded]:opacity-100"
          )}
          preload="none"
        />
      )}
    </div>
  );
}
