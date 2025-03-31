"use client";

import { cn } from "@/lib/utils";
import SectionContainer from "./section-container";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Box from "./box";
import Text from "./text";

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
  return (
    <SectionContainer className="py-6">
      {/* Main Content */}
      <Box className="container mx-auto px-4 py-16">
        <h2 className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10">
          Why Choose Us
        </h2>

        {/* Desktop Tabs View - Hidden on mobile, visible on md and above */}
        <Tabs defaultValue="0" className="hidden md:flex flex-row gap-8">
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
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content (Right Side) */}
          <Box className="w-2/3 lg:w-3/5">
            {tabItems.map((tab, index) => (
              <TabsContent
                key={index}
                value={index.toString()}
                className="relative h-[350px] rounded-2xl overflow-hidden m-0"
              >
                <Box
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${tab.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Backdrop overlay */}
                  <Box className="absolute inset-0 bg-black bg-opacity-70"></Box>

                  {/* Content */}
                  <Box className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
                    <Text variant="h3" className="text-3xl font-bold mb-6">
                      {tab.title}
                    </Text>
                    <Text className="text-lg font-medium leading-relaxed">
                      {tab.content}
                    </Text>
                  </Box>
                </Box>
              </TabsContent>
            ))}
          </Box>
        </Tabs>

        {/* Mobile Accordion View - Visible on mobile, hidden on md and above */}
        <Box className="md:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue="0"
            className="w-full space-y-4"
          >
            {tabItems.map((tab, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  className={cn(
                    "w-full p-4 flex justify-between items-center transition-colors",
                    "hover:no-underline [&[data-state=open]]:bg-[#f0542d] [&[data-state=open]]:text-white"
                  )}
                >
                  <Box as="span" className="text-xl font-semibold">
                    {tab.title}
                  </Box>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <Box>
                    <Box className="p-4">
                      <Text className="font-medium leading-7">
                        {tab.content}
                      </Text>
                    </Box>
                  </Box>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default WhyChooseUs;
