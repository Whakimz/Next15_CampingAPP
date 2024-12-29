import Search from "./Search"
import Logo from "./Logo"
import { DarkMode } from "./DarkMode"
import DropdownListMenu from "./DropdownListMenu"

const Navbar = () => {
  return (
    <nav>
        <div className="container flex flex-col justify-between py-8 sm:flex-row sm:item-center">
            {/* Logo */}
            <Logo />
            {/* Search*/}
            <Search />
            {/* DarkMode & Profile */}
            <div className="flex gap-4">
            <DarkMode/>
            <DropdownListMenu/>  
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar