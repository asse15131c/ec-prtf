"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export function VideoFile({
  url,
  index,
  length,
}: {
  url: string;
  index: number;
  length: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loaded = useRef<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.2,
  });

  useEffect(() => {
    if (!videoRef.current || !isIntersecting || loaded.current) return;

    const onPlay = () => {
      if (!videoRef.current) return;

      videoRef.current.removeEventListener("canplaythrough", onPlay);
      videoRef.current.setAttribute("data-lazy", "loaded");
      loaded.current = true;
    };

    videoRef.current.src = videoRef.current.dataset.src!;
    videoRef.current.setAttribute("preload", "auto");

    videoRef.current.addEventListener("canplaythrough", onPlay);
  }, [videoRef, isIntersecting]);

  return (
    <div
      // 116.54
      className={clsx(
        "relative pb-[1%] h-0 transform-gpu overflow-hidden bg-black/10",
        "gsap:videofile",
        {
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index > 1 && index < length - 1 && length >= 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && index < length - 1 && index > 1 && length >= 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_-1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index <= 1 && length >= 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_-1px_0px_0px_rgba(255,255,255,1)] ":
            index % 2 == 0 && index <= 1 && length >= 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && index >= length - 1 && length > 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_1px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && index >= length - 1 && length > 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_1px_0px_0px_0px_rgba(255,255,255,1)]":
            index % 2 != 0 && length <= 2,
          "shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[inset_-1px_0px_0px_0px_rgba(255,255,255,1)]":
            index % 2 == 0 && length <= 2,
        }
      )}
      ref={ref}
    >
      {/* <div className="absolute -top-[2px] left-0 w-[200%] h-[2px] transform-gpu rotate-[50.2deg] bg-black/20 origin-top-left "></div> */}
      <video
        ref={videoRef}
        data-src={url}
        muted
        loop
        autoPlay
        playsInline
        webkit-playsinline="true"
        className={clsx(
          "w-full h-full object-cover transition-all duration-700 scale-100 opacity-0 absolute inset-0",
          " data-[lazy=loaded]:scale-100 data-[lazy=loaded]:opacity-100",
          "opacity-30 data-[lazy=loaded]:opacity-100"
        )}
        preload="none"
      />
    </div>
  );
}
