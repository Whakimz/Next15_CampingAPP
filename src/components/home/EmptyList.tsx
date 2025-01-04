"use client";
import React from "react";
import { Button } from "../ui/button";
import { Package2 } from "lucide-react";
import { useRouter } from "next/navigation"; // เปลี่ยนเป็น next/navigation

const EmptyList = ({
  heading = "ไม่พบรายการ",
  message = "โปรดลองอีกครั้ง",
  btnText = "back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  const router = useRouter(); // ใช้ useRouter จาก next/navigation

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-gray-100 rounded-full">
          <Package2 className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">{heading}</h2>
        <p className="text-gray-500 max-w-sm">{message}</p>
      </div>

      <Button
        variant="outline"
        className="mt-4 capitalize transition-all hover:scale-105"
        onClick={handleClick}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default EmptyList;
