import { Spotlight } from "@/utils/Spotlight"

function HeroSection() {
  return (
        <>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#6767b9"
      />
        <div className="flex flex-col justify-center items-center gap-2">
        
        <h1 className='text-white font-black text-5xl font-sans'>Welcome to Music Academy</h1>
        <p>Master The Art of Music with our comprehensive courses!</p>
        </div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 900 rounded-3xl p-3 cursor-pointer">
          Explore
        </button>
        </>
  )
}

export default HeroSection