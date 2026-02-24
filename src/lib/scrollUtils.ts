export function scrollTo(selector: string) {
  if (typeof window === "undefined") return;
  const element = document.querySelector(selector);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
