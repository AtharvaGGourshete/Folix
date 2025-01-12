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
import { dark, neobrutalism } from '@clerk/themes';

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
      <nav className="bg-slate-950 sticky top-0 shadow-md z-50">
        <div className="flex items-center justify-between px-6 py-4 text-white">
          {/* Brand Name */}
          <a href="/">
          <div className="text-2xl font-bold">Atharva.dev</div>
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <SignedOut>
              <Button
                variant="destructive"
                onClick={() => setShowSignIn(true)}
              >
                Login
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center z-50 bg-black bg-opacity-50 justify-center"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
}

export default Nav;
