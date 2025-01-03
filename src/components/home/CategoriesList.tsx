import React from "react";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg"; // All icon
import { categories } from "../../../utils/categories";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div className="w-full  px-4 py-6">
      {/* Section Header */}
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibol">Categories</h2>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="flex md:hidden overflow-x-auto whitespace-nowrap gap-2 p-1">
        {/* "All" Button */}
        <Link href="/">
          <Button
            variant={!category ? "default" : "ghost"}
            className={cn(
              "flex flex-col gap-2 h-auto px-4 py-3 transition-all duration-200",
              !category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            <CgMenuGridO
              className={cn(
                "w-6 h-6",
                !category ? "text-primary-foreground" : "text-muted-foreground"
              )}
            />
            <span className="text-sm font-medium capitalize">All</span>
          </Button>
        </Link>

        {/* Category Buttons */}
        {categories.map((item) => {
          const isActive = item.label === category;
          return (
            <Link
              href={`/?category=${item.label}${searchTerm}`}
              key={item.label}
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "flex flex-col gap-2 h-auto px-4 py-3 transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground"
                  )}
                />
                <span className="text-sm font-medium capitalize">
                  {item.label}
                </span>
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Desktop: Full Display */}
      <div className="hidden md:flex flex-wrap gap-2 justify-center p-1">
        <Link href="/">
          <Button
            variant={!category ? "default" : "ghost"}
            className={cn(
              "flex flex-col gap-2 h-auto px-4 py-3 transition-all duration-200",
              !category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            <CgMenuGridO
              className={cn(
                "w-6 h-6",
                !category ? "text-primary-foreground" : "text-muted-foreground"
              )}
            />
            <span className="text-sm font-medium capitalize">All</span>
          </Button>
        </Link>

        {categories.map((item) => {
          const isActive = item.label === category;
          return (
            <Link
              href={`/?category=${item.label}${searchTerm}`}
              key={item.label}
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "flex flex-col gap-2 h-auto px-4 py-3 transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground"
                  )}
                />
                <span className="text-sm font-medium capitalize">
                  {item.label}
                </span>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
