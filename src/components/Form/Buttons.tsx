"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Heart, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";

type ButtonSize = "default" | "lg" | "sm";

interface SubmitButtonProps {
  className?: string;
  size?: ButtonSize;
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  icon?: React.ReactNode;
}

export const SubmitButton = ({
  className,
  text = "Submit",
  size = "default",
  variant = "default",
  icon,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      variant={variant}
      size={size}
      className={cn(
        "relative flex items-center justify-center gap-2 transition-all duration-200",
        pending && "opacity-90",
        className
      )}
    >
      {pending ? (
        <>
          <RotateCw className="h-4 w-4 animate-spin" />
          <span className="text-sm opacity-70">Processing...</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          <span className="capitalize">{text}</span>
        </>
      )}
    </Button>
  );
};

export const SignIncardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        size="icon"
        variant="outline"
        className="flex items-center justify-center text-black/80 p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:border-none dark:text-black/80"
      >
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className={`relative flex items-center justify-center p-3 rounded-full border-none ${
        isFavorite
          ? "bg-green-100 hover:bg-green-200"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {pending ? (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <RotateCw className="animate-spin text-gray-500" />
        </div>
      ) : (
        <Heart
          fill={isFavorite ? "green" : "none"}
          stroke={isFavorite ? "green" : "black"}
          className={`transition-transform ${
            isFavorite ? "text-green-500 scale-110" : "text-gray-500"
          }`}
        />
      )}
    </Button>
  );
};

export default SubmitButton;
