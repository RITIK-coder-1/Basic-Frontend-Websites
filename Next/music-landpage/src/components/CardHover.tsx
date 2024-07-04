import { HoverEffect } from "./ui/card-hover-effect";
import webinars from "../data/webinars.json"

console.log(webinars);




export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = webinars