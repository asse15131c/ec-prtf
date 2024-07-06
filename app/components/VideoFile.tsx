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
}: {
  hasLoadingEnded: boolean;
  url: string;
  index: number;
  projectIndex: number;
  length: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loaded = useRef<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.2,
  });

  const onPlay = () => {
    if (!videoRef.current) return;

    videoRef.current.removeEventListener("canplaythrough", onPlay);
    videoRef.current.setAttribute("data-lazy", "loaded");
    loaded.current = true;
  };

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.addEventListener("canplaythrough", onPlay);
  }, [videoRef]);

  useEffect(() => {
    // console.log("hasLoadingEnded", projectIndex, hasLoadingEnded);

    if (!videoRef.current || loaded.current) {
      return;
    }

    if (projectIndex === 1) {
      videoRef.current.src = videoRef.current.dataset.src!;
      videoRef.current.setAttribute("preload", "auto");
      return;
    }

    if (isIntersecting && hasLoadingEnded) {
      videoRef.current.src = videoRef.current.dataset.src!;
      videoRef.current.setAttribute("preload", "auto");
      return;
    }
  }, [hasLoadingEnded, isIntersecting, projectIndex, videoRef]);

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
        {
          "pb-[1%]": projectIndex > 1,
          "pb-[116.54%]": projectIndex === 1,
        }
      )}
      ref={ref}
    >
      <video
        ref={videoRef}
        data-src={url}
        muted
        loop
        autoPlay
        playsInline
        webkit-playsinline="true"
        className={clsx(
          "w-full h-full object-cover transition-all duration-700 pacity-0 absolute inset-0",
          "opacity-30 data-[lazy=loaded]:opacity-100"
        )}
        preload="none"
      />
    </div>
  );
}
