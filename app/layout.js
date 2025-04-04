import { Source_Sans_3, Roboto } from "next/font/google";
import "./globals.css";
import Header, { SubHeader } from "./components/navigation-components/header";
import Box from "./components/box";
import Footer from "./components/navigation-components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

// const soucesans = SourceSans3({
//   variable: "--font-SourceSans",
//   subsets: ["latin"],
// });

// const nunitoSans = NunitoSans({
//   variable: "--font-nunitoSans",
//   subsets: ["latin"],
// });

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <Box className="sticky top-0 z-50 bg-background shadow-md">
          <SubHeader />
        </Box>
        <GoogleTagManager gtmId="GTM-TGZRHWNP" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
