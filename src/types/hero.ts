export type ClientLogo =
  | { src: "/images/client-databiz.png"; alt: "databiz" }
  | { src: "/images/client-audiophile.png"; alt: "audiophile" }
  | { src: "/images/client-meet.png"; alt: "meet" }
  | { src: "/images/client-maker.png"; alt: "maker" };

export interface DesktopHeroImage {
  src: "/images/image-hero-desktop.png";
  width: 750;
  height: 564;
}

export interface MobileHeroImage {
  src: "/images/image-hero-mobile.png";
  width: 960;
  height: 1280;
}

export interface Wordmark {
  src: "/images/logo-snap.png";
  alt: "snap";
}

export interface HeroContent {
  heading: "Make remote work";
  paragraph: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.";
  learnMoreLabel: "Learn more";
  desktopImage: DesktopHeroImage;
  mobileImage: MobileHeroImage;
  clientLogos: readonly ClientLogo[];
  wordmark: Wordmark;
}
