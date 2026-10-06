import Image from "next/image";
import Navbar from "../navigation/Navbar";

export default function Header() {
  return (
    <header className="flex w-full items-center">
      <Image
        src="/images/logo-snap.png"
        alt="snap"
        width={84}
        height={27}
        priority
      />
      <Navbar />
    </header>
  );
}
