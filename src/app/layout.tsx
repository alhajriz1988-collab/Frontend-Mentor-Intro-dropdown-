import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: "normal",
  variable: "--font-epilogue",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={epilogue.variable}>
      <body>{children}</body>
    </html>
  );
}
