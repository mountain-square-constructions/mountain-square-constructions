"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionContainer from "./section-container";
import Box from "./box";
import Text from "./text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background images and hero content for each slide
  const heroSlides = [
    {
      image: "/homepage-hero-img1.jpg",
      title: "Building Tomorrow's World Today",
      tagline:
        "Excellence in construction, innovation in design, quality in execution",
      buttonText: "Start Your Project",
    },
    {
      image: "/slider2.jpg",
      title: "Engineering Excellence",
      tagline: "Precision engineering that stands the test of time",
      buttonText: "Our Services",
    },
    {
      image: "/slider1.jpg",
      title: "Sustainable Construction",
      tagline: "Creating eco-friendly spaces for a greener future",
      buttonText: "Learn More",
    },
    {
      image: "/slider3.jpg",
      title: "Award-Winning Projects",
      tagline: "Recognized for outstanding design and craftsmanship",
      buttonText: "View Portfolio",
    },
  ];

  // Auto-rotate background images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [heroSlides.length]);

  // Animation to trigger on mount
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // <SectionContainer className="relative overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
    //   {/* Background images with smooth fade transition */}
    //   <div className="absolute top-0 left-0 w-full h-full z-0">
    //     {heroSlides.map((slide, index) => (
    //       <div
    //         key={index}
    //         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
    //           currentIndex === index ? "opacity-100" : "opacity-0"
    //         }`}
    //       >
    //         <Image
    //           src={slide.image}
    //           alt="Construction site background"
    //           fill
    //           className="object-cover object-center"
    //           sizes="100vw"
    //           priority={index === 0}
    //         />
    //         {/* Dark overlay for better text readability */}
    //         <div className="absolute inset-0 bg-black/40"></div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Hero content with animations */}
    //   <div className="relative z-10 h-full flex items-center justify-center">
    //     <div className="text-center px-4 sm:px-6 max-w-4xl">
    //       {heroSlides.map((slide, index) => (
    //         <div
    //           key={index}
    //           className={`absolute inset-0 top-8 sm:top-10 w-full transition-all duration-1000 ${
    //             currentIndex === index
    //               ? "opacity-100 translate-y-0"
    //               : "opacity-0 translate-y-8 pointer-events-none"
    //           }`}
    //         >
    //           <Text
    //             variant="h1"
    //             className="font-[900] !text-white !text-[25px] sm:!text-[35px] md:!text-[44px] lg:!text-[64px] tracking-tight leading-tight mb-4 text-shadow-lg"
    //           >
    //             {slide.title}
    //           </Text>

    //           <Text className="!text-white/90 font-medium text-lg sm:text-2xl md:text-3xl mb-8 text-shadow-sm">
    //             {slide.tagline}
    //           </Text>

    //           <Button className="rounded-lg transition duration-300 ease-in-out transform hover:scale-105 h-12 sm:h-14 text-lg sm:text-xl px-8 bg-amber-500 hover:bg-amber-600 text-black font-bold">
    //             {slide.buttonText}
    //           </Button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Indicators to show current slide position */}
    //   <div className="absolute bottom-2 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    //     {heroSlides.map((_, index) => (
    //       <div
    //         key={index}
    //         className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
    //           currentIndex === index ? "w-8 bg-amber-500" : "w-2 bg-white/50"
    //         }`}
    //         onClick={() => setCurrentIndex(index)}
    //       />
    //     ))}
    //   </div>
    // </SectionContainer>

    <Box className="relative w-full min-h-[400px] md:min-h-[350px] lg:min-h-[450px]">
      {/* Background Image */}
      <Image
        src="/homepage-hero-img1.jpg"
        alt="Projects Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay for better text visibility */}
      <Box className="absolute inset-0 bg-black/70" />

      {/* Content Container */}
      <Box className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <SectionContainer>
          <Text
            variant="h1"
            className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-4 "
          >
            Building Your Dreams into Spaces You’ll Love Forever
          </Text>
          <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            At Mountain Square Constructions, we create exceptional spaces with
            precision and care.
          </Text>
          <Text className="text-white/90 text-md md:text-3xl lg:text-4xl max-w-2xl mx-auto my-4">
            Ready to Build Your Dream Home?
          </Text>
          <Button className="rounded-lg transition duration-300 ease-in-out transform hover:scale-105 h-12 sm:h-14 text-lg sm:text-xl px-8 bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <Link href="/contact">  Contact Us</Link>
          </Button>
        </SectionContainer>
      </Box>
    </Box>
  );
};

export default HeroSection;
