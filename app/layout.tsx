import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Provider from "@/lib/provider";

const manrope = Manrope({
  subsets: ["latin"], // Adjust subsets as needed
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-manrope", // Optional: Use CSS variable for global styles
});

export const metadata: Metadata = {
  title: "Kreative Rock",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.className}>
      <body suppressHydrationWarning>
        <NextTopLoader
          color="#04BA99"
          // color="#FEC28B"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
