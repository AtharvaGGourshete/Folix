import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { dark, neobrutalism } from '@clerk/themes'

function Nav() {
  const [search, setSearch] = useSearchParams();
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="bg-slate-950 ">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1 justify-around">
            <span className="text-3xl font-bold">Folix</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-evenly font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                
                <SignedOut>
                  <Link to="/">
                    <Button variant="ghost">Home</Button>
                  </Link>

                  {/* <Link to="/education">
                    <Button variant="ghost">Education</Button>
                  </Link> */}

                  <Button
                    variant="destructive"
                    onClick={() => setShowSignIn(true)}
                  >
                    Login
                  </Button>
                </SignedOut>
                <SignedIn>
                  {/* <Link to="/">
                    <Button variant="ghost">Home</Button>
                  </Link>

                  <Link to="/education">
                    <Button variant="ghost">Education</Button>
                  </Link> */}
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  ></UserButton>
                </SignedIn>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center bg-black bg-opacity-50 justify-center z-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
}

export default Nav;
