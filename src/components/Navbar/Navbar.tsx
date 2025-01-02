import Search from "./Search";
import Logo from "./Logo";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 dark:border-[#27272a]">
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:item-center">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <Search />

        {/* DarkMode & Profile */}
        <div className="flex gap-4 border-l pl-4 border-gray-200 dark:border-[#27272a]">
          <DarkMode />
          <SignedOut>
            <div className="flex items-center gap-2">
              {/* Login and Register buttons in the navbar */}
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
            {/* Show Avatar when user is signed in */}
            <DropdownListMenu />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
