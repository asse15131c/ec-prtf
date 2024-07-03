import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

type Breakpoints = {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
};

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useScreen(size: "sm" | "md" | "lg" | "xl" | "2xl"): number {
  return screens[size];
}

export function useBreakpoints(): Breakpoints {
  const { width } = useWindowSize();

  const breakpoints = useMemo<Breakpoints>(() => {
    return Object.entries(screens).reduce((result, screen) => {
      const [screenName, screenSize] = screen;
      const sizeIs = `is${screenName
        .charAt(0)
        .toUpperCase()}${screenName.substring(1)}`;

      return {
        ...result,
        [sizeIs]: screenSize <= width,
      };
    }, {}) as Breakpoints;
  }, [width]);

  return breakpoints;
}
