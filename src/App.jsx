// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/ui/retro-grid";
import TextReveal from "./components/ui/text-reveal";
import "./App.css";

function App() {
  return (
    <main>
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

          <RetroGrid/>
        </div>
        <div className="z-10 flex items-center justify-center bg-slate-950 dark:bg-black">
          <TextReveal text="A Student at A.P. Shah Institue Of Technology" />
          
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
