import Image from "next/image";
import { hero } from "../../data/hero";

const logoSize = {
  "/images/client-databiz.png": { width: 114, height: 20 },
  "/images/client-audiophile.png": { width: 73, height: 36 },
  "/images/client-meet.png": { width: 90, height: 20 },
  "/images/client-maker.png": { width: 83, height: 24 },
} as const;

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center gap-10 min-[640px]:flex-row min-[640px]:items-center min-[640px]:gap-12">
      <Image
        src={hero.mobileImage.src}
        alt=""
        width={hero.mobileImage.width}
        height={hero.mobileImage.height}
        className="h-auto w-full min-[640px]:hidden"
      />
      <div className="flex min-w-0 flex-1 flex-col items-center gap-8 text-center min-[640px]:items-start min-[640px]:text-left">
        <h1 className="max-w-[10ch] text-5xl font-bold leading-none text-gray-950 min-[640px]:text-7xl">
          {hero.heading}
        </h1>
        <p className="max-w-md text-gray-500">{hero.paragraph}</p>
        <button
          type="button"
          className="rounded-full bg-gray-950 px-8 py-3 font-bold"
          style={{ color: "var(--color-gray-50)" }}
        >
          {hero.learnMoreLabel}
        </button>
        <ul className="flex items-center gap-8">
          {hero.clientLogos.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logoSize[logo.src].width}
                height={logoSize[logo.src].height}
              />
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={hero.desktopImage.src}
        alt=""
        width={hero.desktopImage.width}
        height={hero.desktopImage.height}
        priority
        className="hidden h-auto w-full min-w-0 flex-1 min-[640px]:block"
      />
    </section>
  );
}
