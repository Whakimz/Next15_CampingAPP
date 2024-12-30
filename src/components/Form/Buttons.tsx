"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export default SubmitButton;
