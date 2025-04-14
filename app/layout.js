import { Source_Sans_3, Roboto } from "next/font/google";
import "./globals.css";
import Header, { SubHeader } from "./components/navigation-components/header";
import Box from "./components/box";
import Footer from "./components/navigation-components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import FloatingWhatsAppButton from "./components/whats-app-button";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Only use available Roboto weights
  display: "swap",
});

export const metadata = {
  title: "Mountain Square Construction | Bangalore",
  description: `Mountain Square Construction specializes in high-quality residential, commercial, and industrial projects. We deliver on-time, on-budget results with sustainable practices and exceptional craftsmanship.`,
  keywords: [
    "Mountain Square Construction",
    "quality construction",
    "residential projects",
    "commercial construction",
    "industrial construction",
    "sustainable building",
    "professional contractors",
  ],
  openGraph: {
    title: "Mountain Square Construction | Bangalore",
    description:
      "Mountain Square Construction specializes in high-quality residential, commercial, and industrial projects. We deliver on-time, on-budget results with sustainable practices and exceptional craftsmanship.",
    url: "https://mountainsquareconstruction.com/",
    siteName: "Mountain Square Construction",
    images: [
      {
        url: "https://mountainsquareconstruction.com/mountain-square-white-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGZRHWNP"
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>

        <Header />
        <Box className="sticky top-0 z-50 bg-background shadow-md">
          <SubHeader />
        </Box>
        <GoogleTagManager gtmId="GTM-TGZRHWNP" />
        {children}
        <FloatingWhatsAppButton phoneNumber="918310985053" />
        <Footer />
      </body>
    </html>
  );
}
