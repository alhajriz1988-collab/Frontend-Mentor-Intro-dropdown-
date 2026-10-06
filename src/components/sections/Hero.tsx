import Image from "next/image";
import { hero } from "../../data/hero";

const logoSize = {
  "/images/client-databiz.png": { width: 114, height: 20 },
  "/images/client-audiophile.png": { width: 73, height: 36 },
  "/images/client-meet.png": { width: 90, height: 20 },
  "/images/client-maker.png": { width: 83, height: 24 },
} as const;

const logoClass = {
  "/images/client-databiz.png": "h-auto w-[89px] min-[904px]:w-[114px]",
  "/images/client-audiophile.png": "h-auto w-[57px] min-[904px]:w-[73px]",
  "/images/client-meet.png": "h-auto w-[70px] min-[904px]:w-[90px]",
  "/images/client-maker.png": "h-auto w-[65px] min-[904px]:w-[83px]",
} as const;

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center pb-16 min-[904px]:block min-[904px]:px-0 min-[904px]:pt-0 min-[904px]:pb-20">
      <Image
        src={hero.mobileImage.src}
        alt=""
        width={hero.mobileImage.width}
        height={hero.mobileImage.height}
        priority
        className="hidden h-[640px] w-[480px] min-[904px]:absolute min-[904px]:top-[46px] min-[904px]:right-[128px] min-[904px]:block"
      />
      <Image
        src={hero.desktopImage.src}
        alt=""
        width={hero.desktopImage.width}
        height={hero.desktopImage.height}
        priority
        className="h-auto w-full min-[904px]:hidden"
      />
      <div className="mt-12 flex w-full min-w-0 flex-col items-center px-4 text-center min-[904px]:mt-0 min-[904px]:items-start min-[904px]:px-0 min-[904px]:pt-[9.25rem] min-[904px]:pl-[170px] min-[904px]:text-left">
        <h1 className="text-[2.2rem] leading-none font-bold text-gray-950 min-[904px]:max-w-[520px] min-[904px]:text-[4.875rem] min-[904px]:leading-[1.04]">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-[22.5rem] text-base leading-6 text-gray-500 min-[904px]:mt-12 min-[904px]:max-w-[430px] min-[904px]:text-lg min-[904px]:leading-7">
          {hero.paragraph}
        </p>
        <button
          type="button"
          className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-gray-950 px-4 text-lg font-bold min-[904px]:mt-[3.25rem] min-[904px]:h-14 min-[904px]:px-7"
          style={{ color: "var(--color-gray-50)" }}
        >
          {hero.learnMoreLabel}
        </button>
        <ul className="mt-12 flex w-full max-w-[22.5rem] items-center justify-between min-[904px]:mt-[6.75rem] min-[904px]:w-auto min-[904px]:max-w-none min-[904px]:justify-start min-[904px]:gap-10">
          {hero.clientLogos.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logoSize[logo.src].width}
                height={logoSize[logo.src].height}
                className={logoClass[logo.src]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
