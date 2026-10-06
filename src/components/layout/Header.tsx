import Image from "next/image";

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
      {/* Desktop navigation */}
      <div className="flex min-w-0 flex-1 items-center" />
      {/* Account navigation */}
      <div className="flex items-center" />
      {/* Mobile menu toggle */}
      <div className="flex items-center" />
    </header>
  );
}
