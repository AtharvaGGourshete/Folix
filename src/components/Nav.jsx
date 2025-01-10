import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

function Nav() {
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-950 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Education">
            <li className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded">
              Education
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="logIn"
            className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded"
          >
            <li>Log In</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="bg-slate-950">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Folix</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Education">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">
                  Education
                </li>
              </Link>
              <Link
                href="logIn"
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer"
              >
                Log In
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
