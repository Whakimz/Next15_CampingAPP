import { FaCampground } from "react-icons/fa"; // ใช้ไอคอนเต็นท์จาก react-icons
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-2xl font-bold space-x-2">
      {/* ไอคอนเต็นท์ */}
      <FaCampground className="text-primary" />
      {/* ข้อความโลโก้ */}
      <span>WakimCamping</span>
    </Link>
  );
};

export default Logo;
