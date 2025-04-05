import HeroSection from "./components/hero-section";
import WhoWeAre from "./components/who-we-are";
import WhatWeDo from "./components/projects";
import ServicesOffered from "./components/services-offered";
import WhyChooseUs from "./components/why-choose-us";
import ContactSection from "./components/contact-section";
import Projects from "./components/projects";
import AboutusSection from "./components/aboutus";
import Testimonials from "./components/testimonials";
import CTASection from "./components/last-section";
import HowWeWorkSection from "./components/how-we-work";

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
      <HowWeWorkSection />
      <Testimonials />
      <CTASection />
      {/* <ContactSection /> */}
    </>
  );
}
