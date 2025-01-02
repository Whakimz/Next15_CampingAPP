import { Home, User, Heart, Plus, TentTree } from "lucide-react"; // นำเข้าไอคอนจาก lucide-react

type NavLinks = {
    href: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // ใช้ React.SVGProps<SVGSVGElement> แทน any
};

export const links: NavLinks[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/favorits", label: "Favorite", icon: Heart },
    { href: "/camp", label: "Camp", icon: TentTree },
    { href: "/camp/create", label: "Create Landmark", icon: Plus },
];
