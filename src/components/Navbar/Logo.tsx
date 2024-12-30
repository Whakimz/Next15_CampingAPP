import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/" className="flex items-center text-2xl font-bold space-x-2">
        {/* ไอคอนตกแต่ง */}
        <span>Logo</span>
      </Link>
    </Button>
  );
};

export default Logo;
