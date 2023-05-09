import Image from "next/image";
import logo from "public/logo.png";

export default function SideBarTitle() {
  return (
    <div className="flex items-center gap-4 pt-6 transition-all ">
      <Image
        className="transition-all w-14 animate-pulse hover:animate-spin"
        src={logo}
        alt=""
      />
      <span className="text-lg font-extrabold text-white transition-all">
        <h1>CleanAir Compass</h1>
      </span>
    </div>
  );
}
