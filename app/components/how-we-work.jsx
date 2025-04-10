"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PhoneCallIcon } from "lucide-react";
import SectionContainer from "./section-container";
import Text from "./text";
import Box from "./box";
import Image from "next/image";

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState();

  const steps = [
    {
      id: 1,
      title: "Evaluation And Signing Of The Contract.",
      icon: "/planing.png",
    },
    {
      id: 2,
      title: "Preparation Of The Work Plan.",
      icon: "/download.png",
    },
    {
      id: 3,
      title: "Implementation Of Quality Works",
      icon: "/qualitywork.webp",
    },
    {
      id: 4,
      title: "Delivering The Project To The Customer",
      icon: "/delivery.webp",
    },
  ];

  return (
    <Box className="bg-[#f7fcfe]">
      <SectionContainer>
        <Text
          variant="h2"
          className="text-center text-[30px] md:text-[35px] lg:text-[35px] font-bold mb-12 text-[#f0542d]"
        >
          How we Work
        </Text>
        <Box className="bg-background p-5 rounded-xl shadow-lg">
          {/* Desktop Timeline (md and above) */}
          <Box className="hidden md:grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Box
                key={step.id}
                className="relative flex flex-col"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Icon */}
                <Box
                  className={cn(
                    "mx-auto text-white transition-all duration-500 ease-in-out",
                    activeStep === step.id ? "transform scale-110" : ""
                  )}
                >
                  <Image src={step.icon} alt="" width={100} height={100} />
                </Box>

                {/* Title */}
                <Text
                  className={cn(
                    "mt-6 text-lg font-bold text-center transition-all duration-300",
                    activeStep === step.id
                      ? "text-[#f0542d]"
                      : "text-foreground"
                  )}
                >
                  {step.title}
                </Text>

                {/* Step Number */}
                <Box className="text-center pt-5 mt-auto">
                  <span className="text-[#f0542d] font-bold">
                    Step {String(step.id).padStart(2, "0")}
                  </span>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Timeline Line with Dots (Desktop) */}
          <Box className="hidden md:block relative mt-6">
            <Box className="absolute left-0 right-0 h-0.5 bg-[#f0542d]"></Box>
            <Box className="grid grid-cols-4 relative">
              {steps.map((step) => (
                <Box key={step.id} className="flex justify-center">
                  <Box
                    className={cn(
                      "w-4 h-4 rounded-full border-2 border-[#f0542d] bg-[#f0542d] relative top-[-8px] transition-all duration-300",
                      activeStep === step.id ? "w-6 h-6 top-[-12px]" : ""
                    )}
                  ></Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Mobile Timeline (below md) */}
          <Box className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <Box
                key={step.id}
                className="relative pl-20"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <Box className="absolute left-7 top-16 bottom-0 w-0.5 bg-[#f0542d] -translate-x-1/2 h-[calc(100%+60px)]"></Box>
                )}

                {/* Icon with Circle */}
                <Box className="absolute left-0 top-0">
                  <Box
                    className={cn(
                      "text-white transition-all duration-300",
                      activeStep === step.id ? "transform scale-110" : ""
                    )}
                  >
                    <Image src={step.icon} alt="" width={100} height={100} />
                  </Box>
                </Box>

                {/* Content */}
                <Box className="ml-12">
                  <Text
                    className={cn(
                      "text-lg font-bold transition-all duration-300",
                      activeStep === step.id
                        ? "text-[#f0542d]"
                        : "text-foreground"
                    )}
                  >
                    {step.title}
                  </Text>
                  <Box className="mt-2">
                    <span className="text-[#f0542d] font-bold">
                      Step {String(step.id).padStart(2, "0")}
                    </span>
                  </Box>
                </Box>

                {/* Dot for Mobile */}
                <Box className="absolute left-7 top-[70px] -translate-x-1/2">
                  <Box
                    className={cn(
                      "w-3 h-3 rounded-full border-2 border-[#f0542d] bg-[#f0542d] transition-all duration-300",
                      activeStep === step.id ? "w-5 h-5" : ""
                    )}
                  ></Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
}
