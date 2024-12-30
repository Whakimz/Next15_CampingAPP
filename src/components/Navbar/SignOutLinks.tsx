"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react"; // นำเข้าไอคอน LogOut จาก lucide-react

const SignOutLinks = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logout Successfully!!" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button
        className="w-full text-left flex items-center gap-2 text-red-500" // เพิ่ม text-red-500 เพื่อให้ข้อความเป็นสีแดง
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5" /> {/* เพิ่มไอคอนตรงนี้ */}
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
