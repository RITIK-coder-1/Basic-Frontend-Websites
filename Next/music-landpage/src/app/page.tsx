"use client"
import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import courses from "../data/courses.json"
import { InfiniteMovingCardsDemo } from "@/components/MovingCard";
import { CardHoverEffectDemo } from "@/components/CardHover";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return(
    <>
    <main className="h-full felx flex-col justify-center items-center">
        <section className="h-full md:h-[40rem] flex flex-col justify-center items-center gap-5 my-10">
        <HeroSection />
        </section>
        <section>
          <h1 className="text-3xl font-black text-center my-10">Learn From The Best</h1>
          <div className="grid grid-rows-2 grid-cols-3 gap-5 pl-5">
          {courses.map(ele => {
            return <CardSection heading={`${ele.title}`} key={ele.id} desc={ele.desc} price={ele.price}/>
          })}
          </div>
        </section>
        <section>
          <InfiniteMovingCardsDemo />
        </section>
        <section className="dark:bg-dot-white/[0.05]">
          <h2 className="text-3xl text-center font-bold mt-5">Our Featured Webinar</h2>
        <CardHoverEffectDemo />
        </section>
        <section>
          <WavyBackground />
        </section>
    </main>
    </>
  )
}
