"use client";

import { links } from "../../../utils/link";
import Link from "next/link";

import SignOutLinks from "./SignOutLinks";
import { SignedIn, useUser } from "@clerk/nextjs"; // ใช้ useUser จาก Clerk เพื่อนำข้อมูลผู้ใช้
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"; // ใช้ Avatar จาก shadcn/ui

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownListMenu = () => {
  const { user } = useUser(); // ใช้ useUser hook เพื่อนำข้อมูลผู้ใช้

  // Log user data for debugging (optional)
  console.log("Logged in user:", user);

  return (
    <DropdownMenu>
      {/* Trigger สำหรับเปิด Dropdown */}
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2">
          <SignedIn>
            {/* Avatar with hover effect similar to ChatGPT's style */}
            <Avatar className="w-10 h-10  hover:scale-105 hover:border-accent hover:ring-4 hover:ring-accent transition-all duration-200">
              <AvatarImage
                src={
                  user?.imageUrl ||
                  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                } // Use imageUrl if available
                alt="User Avatar"
                className="rounded-full"
              />
              <AvatarFallback className="text-sm ">
                {user?.firstName?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
          </SignedIn>
        </div>
      </DropdownMenuTrigger>

      {/* เมนูที่แสดงเมื่อคลิกที่ปุ่ม */}
      <DropdownMenuContent className="dark:border-[#27272ae3] ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* สำหรับผู้ที่ล็อกอินแล้ว */}
        <SignedIn>
          {links.map((item, index) => (
            <DropdownMenuItem key={index}>
              <item.icon className="mr-2" />
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          {/* เมนูออกจากระบบ */}
          <DropdownMenuItem>
            <SignOutLinks />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
