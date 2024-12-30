import { Button } from "../ui/button";
import Link from "next/link";
import { Home } from "lucide-react"; // นำเข้าไอคอนจาก Lucide

const Logo = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/" className="flex items-center text-2xl font-bold space-x-2">
        <Home className="w-6 h-6 text-white" /> {/* ไอคอนตกแต่ง */}
        <span>Logo</span>
      </Link>
    </Button>
  );
};

export default Logo;
