import Search from "./Search";
import Logo from "./Logo";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 dark:border-[#27272a]">
      {" "}
      {/* Border รอบ Navbar */}
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:item-center">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <Search />

        {/* DarkMode & Profile */}
        <div className="flex gap-4 border-l pl-4 border-gray-200 dark:border-[#27272a]">
          <DarkMode />
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
