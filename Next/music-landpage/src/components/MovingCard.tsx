"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-16">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      "quote":
        "This music course completely transformed my understanding of music theory. The lessons were clear, concise, and incredibly engaging. I feel much more confident in my musical abilities now!",
      "name": "John Smith",
      "title": "Aspiring Musician"
    },
    {
      "quote":
        "As someone who has always struggled with rhythm, this course was a game-changer for me. The practical exercises and tips helped me improve significantly. I can't recommend it enough!",
      "name": "Emily Johnson",
      "title": "Drumming Enthusiast"
    },
    {
      "quote": 
        "I was skeptical about online music courses, but this one exceeded all my expectations. The instructors were knowledgeable and supportive, making the learning process enjoyable and effective.",
      "name": "Michael Brown",
      "title": "Guitar Player"
    },
    {
      "quote":
        "The best part about this course is how it caters to all skill levels. As a beginner, I found the content very accessible, and now I can play my favorite songs with ease. Fantastic experience!",
      "name": "Sophia Davis",
      "title": "Music Lover"
    },
    {
      "quote":
        "I have taken many music courses, but this one stands out for its comprehensive curriculum and interactive lessons. It's perfect for anyone looking to deepen their musical knowledge.",
      "name": "David Wilson",
      "title": "Professional Pianist"
    }
  ]
  
