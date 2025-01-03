"use client";

import Search from "./Search";
import Logo from "./Logo";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 dark:border-[#27272a]">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Search */}
        <div className="hidden sm:block flex-1 px-4">
          <Search />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <Button
            variant={"ghost"}
            className="text-gray-500 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* DarkMode & Profile */}
        <div className="hidden sm:flex items-center border-l pl-4 border-gray-200 dark:border-[#27272a] space-x-4">
          <DarkMode />
          <SignedOut>
            <div className="flex items-center space-x-2">
              <SignInButton mode="modal">
                <Button variant="link" className="text-primary">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default">Register</Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <DropdownListMenu />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-4 py-4 space-y-4">
          <Search />
          <div className="flex flex-col items-start space-y-2">
            <DarkMode />
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="link"
                  className="text-primary w-full text-left"
                >
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default" className="w-full">
                  Register
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <DropdownListMenu />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
