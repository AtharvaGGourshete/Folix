import React from 'react'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/ui/retro-grid";
import TextReveal from '@/components/ui/text-reveal';
import BoxReveal from '@/components/ui/box-reveal';

const Landing = () => {
  return (
    <main className="bg-slate-950">
      <Nav />
      <div className="w-full">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background bg-slate-950">
          <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-60">
            <span className="text-4xl text-white">Welcome to</span>
            <br />
            <span className="text-7xl text-white"> Atharva Gourshete's</span>
            <br />
            <span className="text-4xl text-white">Portfolio</span>
          </span>

          <RetroGrid />
        </div>
        <div className="z-10 flex items-center justify-center bg-slate-950 dark:bg-black">
          <TextReveal text="A second year student at A.P. Shah Institue Of Technology." />
        </div>


        <div className="size-full max-w-lg items-center justify-center overflow-hidden mr-auto ml-auto pt-8 bg-slate-950 text-white">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Education<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              UI library for{" "}
              <span className="text-[#5046e6]">Design Engineers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Framer Motion
                </span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>
        </div>


      </div>
      <Footer />
    </main>
  )
}

export default Landing