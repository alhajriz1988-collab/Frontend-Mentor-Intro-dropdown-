import Image from "next/image";
import Navbar from "../navigation/Navbar";

export default function Header() {
  return (
    <header className="relative z-20 flex w-full items-center px-4 pt-4 pb-8 min-[904px]:gap-[60px] min-[904px]:px-10 min-[904px]:py-[21px]">
      <Image
        src="/images/logo-snap.png"
        alt="snap"
        width={84}
        height={27}
        priority
        className="h-[27px] w-[84px] shrink-0"
      />
      <Navbar />
    </header>
  );
}
