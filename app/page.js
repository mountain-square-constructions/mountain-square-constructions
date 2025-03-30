import HeroSection from "./components/hero-section";
import WhoWeAre from "./components/who-we-are";
import WhatWeDo from "./components/projects";
import ServicesOffered from "./components/services-offered";
import WhyChooseUs from "./components/why-choose-us";
import ContactSection from "./components/contact-section";
import Projects from "./components/projects";
import AboutusSection from "./components/aboutus";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <WhoWeAre />
      <WhatWeDo /> */}
      <AboutusSection />
      <ServicesOffered />
      <Projects />
      <WhyChooseUs />
      {/* <ContactSection /> */}
    </>
  );
}
