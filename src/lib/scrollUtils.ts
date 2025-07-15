import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({ duration: 1.2, smooth: true });

export function scrollTo(target: string | number) {
  lenis.scrollTo(target, { offset: -50 });
}