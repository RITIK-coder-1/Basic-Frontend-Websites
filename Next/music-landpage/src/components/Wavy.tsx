"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <>
      <div className="relative h-[40rem] overflow-hidden flex justify-center items-center">
        <WavyBackground className="absolute inset-0 max-w-4xl mx-auto pb-40 w-full">
          {/* Ensure the paragraphs are inside a container with a higher z-index */}
          
        </WavyBackground>
      </div>
    </>
  );
}
