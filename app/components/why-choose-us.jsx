// import React from "react";
// import { Award, Shield, Target, Truck, Handshake, Mail } from "lucide-react";
// import Box from "./box";
// import Link from "next/link";
// import Text from "./text";
// import SectionContainer from "./section-container";
// import Image from "next/image";

// const WhyChooseUs = () => {
//   return (
//     <Box className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
//       {/* Background Pattern */}
//       <Box className="absolute inset-0 opacity-5">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern
//               id="grid"
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 40 0 L 0 0 0 40"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </Box>

//       {/* Main Content */}
//       <SectionContainer>
//         <Text
//           variant="h2"
//           className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
//         >
//           {" "}
//           Why choose Us
//         </Text>

//         <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center">
//           <Box>
//             <Image
//               src="/bestquality.jpg"
//               alt="qualitybuilding"
//               width={400}
//               height={300}
//               className="w-full h-[300px] rounded-3xl"
//             />
//           </Box>
//           <Box>
//             <Text variant="h2">Best Quality</Text>
//             <Text className="font-medium mt-4">
//               Quality consciousness is a culture that is imbibed in our company.
//               This is in fact a habit cultivated with sheer dedication and a
//               continuous improvement process. Our team is led by Engineers who
//               have excelled incorporates for their quality standards and the
//               in-house workforce are trained to deliver the right job every time
//               without rework or revisit.
//             </Text>
//           </Box>
//         </Box>
//         <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center my-10">
//           <Box className="order-2 md:order-1">
//             <Text variant="h2">100% Adherence to Standards</Text>
//             <Text className="font-medium mt-4">
//               The construction industry is vastly driven by Semiskilled
//               workforce, It is in this background that we take pride in our
//               Professional knowledge of Building codes and Construction
//               standards. Our in house Architects and Structural Consultant set
//               the best benchmark in the industry and we always ensure 100%
//               STRUCTURAL CLEARANCE AND BUILDING CODE ADHERENCE.
//             </Text>
//           </Box>
//           <Box className="order-1 md:order-2">
//             <Image
//               src="/standard.png"
//               alt="standardbuilding"
//               width={400}
//               height={300}
//               className="w-full h-[300px] rounded-3xl"
//             />
//           </Box>
//         </Box>
//         <Box className="grid grid-cols-1 md:grid-cols-2  md:gap-x-20 items-center">
//           <Box>
//             <Image
//               src="/Budget.jpg"
//               alt="Budgetbuilding"
//               width={400}
//               height={300}
//               className="w-[500px] h-[500px] rounded-3xl mx-auto"
//             />
//           </Box>
//           <Box>
//             <Text variant="h2">Affordable & Transparent Pricing </Text>
//             <Text className="font-medium mt-4">
//               Integrity is our core company value. Our contract with the client
//               will provide clear cost breakup and we stick to these obligation
//               at all times. TRANSPARENCY & AFFORDABILITY is our core strength.
//             </Text>
//           </Box>
//         </Box>
//         <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center my-10">
//           <Box className="order-2 md:order-1">
//             <Text variant="h2">On-Time Every time </Text>
//             <Text className="font-medium mt-4">
//               TIME IS MONEY. This is true for us as a Construction engineer as
//               well as the client. We take pride that all our projects will be
//               handed over on time. This involves meticulous resource planning
//               and construction methods, we are adept at meeting this challenge
//               under all circumstances.
//             </Text>
//           </Box>
//           <Box className="order-1 md:order-2">
//             <Image
//               src="/ontime.jpeg"
//               alt="ontimebuilding"
//               width={400}
//               height={300}
//               className="w-full h-[400px] rounded-3xl mx-auto"
//             />
//           </Box>
//         </Box>
//       </SectionContainer>
//     </Box>
//   );
// };

// export default WhyChooseUs;

"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import SectionContainer from "./section-container";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const tabItems = [
  {
    title: "Best Quality",
    content:
      "Quality consciousness is a culture that is imbibed in our company. This is in fact a habit cultivated with sheer dedication and a continuous improvement process. Our team is led by Engineers who have excelled incorporates for their quality standards and the in-house workforce are trained to deliver the right job every time without rework or revisit.",
    image: "/bestquality.jpg",
    alt: "qualitybuilding",
  },
  {
    title: "100% Adherence to Standards",
    content:
      "The construction industry is vastly driven by Semiskilled workforce, It is in this background that we take pride in our Professional knowledge of Building codes and Construction standards. Our in house Architects and Structural Consultant set the best benchmark in the industry and we always ensure 100% STRUCTURAL CLEARANCE AND BUILDING CODE ADHERENCE.",
    image: "/standard.png",
    alt: "standardbuilding",
  },
  {
    title: "Affordable & Transparent Pricing",
    content:
      "Integrity is our core company value. Our contract with the client will provide clear cost breakup and we stick to these obligation at all times. TRANSPARENCY & AFFORDABILITY is our core strength.",
    image: "/Budget.jpg",
    alt: "Budgetbuilding",
  },
  {
    title: "On-Time Every time",
    content:
      "TIME IS MONEY. This is true for us as a Construction engineer as well as the client. We take pride that all our projects will be handed over on time. This involves meticulous resource planning and construction methods, we are adept at meeting this challenge under all circumstances.",
    image: "/ontime.jpeg",
    alt: "ontimebuilding",
  },
];

const WhyChooseUs = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in");
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const intervalRef = useRef(null);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Function to handle tab switching with fade effect
  const switchTab = (index) => {
    // Start fade out
    setFadeState("fade-out");

    // After fade out completes, fade in
    setTimeout(() => {
      setFadeState("fade-in");
    }, 300); // Match this with the CSS transition duration
  };

  // Auto-switching functionality (only for desktop)
  useEffect(() => {
    if (isMobile) return;

    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          // This will be handled by the Tabs component's value state
        }
      }, 3000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isMobile]);

  return (
    <SectionContainer className="py-6">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10">
          Why Choose Us
        </h2>

        {/* Desktop Tabs View */}
        {!isMobile && (
          <Tabs
            defaultValue="0"
            className="hidden md:flex flex-row gap-8"
            onValueChange={(value) => switchTab(parseInt(value))}
          >
            {/* Tab List (Left Side) */}
            <TabsList className="w-1/3 lg:w-2/5 space-y-5 flex flex-col bg-transparent p-0 h-auto">
              {tabItems.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className={cn(
                    "w-full text-left justify-start p-4 rounded-lg transition-all duration-300 border-l-4 text-[25px] font-semibold",
                    "data-[state=active]:bg-[#f0542d] data-[state=active]:text-white data-[state=active]:border-white",
                    "hover:bg-[#f0542d]/30 bg-white shadow-lg border-transparent"
                  )}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setHoveredTab(index);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setHoveredTab(null);
                  }}
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content (Right Side) */}
            <div className="w-2/3 lg:w-3/5">
              {tabItems.map((tab, index) => (
                <TabsContent
                  key={index}
                  value={index.toString()}
                  className={cn(
                    "relative h-[350px] rounded-2xl overflow-hidden transition-opacity duration-300 m-0",
                    fadeState === "fade-in" ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${tab.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Backdrop overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
                      <h3 className="text-3xl font-bold mb-6">{tab.title}</h3>
                      <p className="text-lg font-medium leading-relaxed">
                        {tab.content}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}

        {/* Mobile Accordion View */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {tabItems.map((tab, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                defaultValue={index === 0}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  className={cn(
                    "w-full p-4 flex justify-between items-center transition-colors",
                    "hover:no-underline [&[data-state=open]]:bg-[#f0542d] [&[data-state=open]]:text-white"
                  )}
                >
                  <span className="text-xl font-semibold">{tab.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div>
                    {/* <div
                      className="h-48 w-full"
                      style={{
                        backgroundImage: `url(${tab.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    </div> */}
                    <div className=" p-4">
                      <p className=" font-medium">{tab.content}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
