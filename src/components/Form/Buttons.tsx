"use client";

import { useFormStatus } from "react-dom";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};
export const SubmitButton = ({ className, text, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`${className} capitalize`}
      size={size}
    >
      {pending ? <RotateCw className="animate-spin" /> : <p>{text}</p>}
    </Button>
  );
};
