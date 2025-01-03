"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react"; // นำเข้าไอคอนจาก lucide-react
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DarkMode() {
  const { setTheme } = useTheme(); // use resolvedTheme to detect the current theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="dark:border-[#27272ae3] font-light"
        align="end"
      >
        {/* Light Theme */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-[1rem] w-[1rem]" />
          Light
        </DropdownMenuItem>

        {/* Dark Theme */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-[1rem] w-[1rem]" />
          Dark
        </DropdownMenuItem>

        {/* System Theme */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-[1rem] w-[1rem]" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
