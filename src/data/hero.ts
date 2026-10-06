import type { HeroContent } from "../types/hero";

export const hero = {
  heading: "Make remote work",
  paragraph:
    "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
  learnMoreLabel: "Learn more",
  desktopImage: {
    src: "/images/image-hero-desktop.png",
    width: 750,
    height: 564,
  },
  mobileImage: {
    src: "/images/image-hero-mobile.png",
    width: 960,
    height: 1280,
  },
  clientLogos: [
    { src: "/images/client-databiz.png", alt: "databiz" },
    { src: "/images/client-audiophile.png", alt: "audiophile" },
    { src: "/images/client-meet.png", alt: "meet" },
    { src: "/images/client-maker.png", alt: "maker" },
  ],
  wordmark: {
    src: "/images/logo-snap.png",
    alt: "snap",
  },
} as const satisfies HeroContent;
