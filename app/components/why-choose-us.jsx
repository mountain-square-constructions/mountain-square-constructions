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
import { ChevronRight } from "lucide-react";

const tabItems = [
  {
    title: "Free Consultation",
    content:
      "Get a free consultation with our experienced construction team to discuss your project needs. We provide expert advice and guidance to ensure the best start to your construction or renovation project",
    image: "/bestquality.jpg",
    alt: "qualitybuilding",
  },
  {
    title: "Quality Construction",
    content:
      "Our focus is on high-quality construction using top-tier materials and skilled craftsmanship. We build homes and commercial spaces designed to last, providing long-term durability and value.",
    image: "/standard.png",
    alt: "standardbuilding",
  },
  {
    title: "On-Time Delivery",
    content:
      "We guarantee on-time project delivery without compromising quality. Our efficient project management ensures that your construction or renovation is completed as scheduled.",
    image: "/Budget.jpg",
    alt: "Budgetbuilding",
  },
  {
    title: "Customer Satisfaction",
    content:
      "Customer satisfaction is at the heart of everything we do. We work closely with you to meet your specific needs and exceed expectations, delivering results you’ll be proud of.",
    image: "/ontime.jpeg",
    alt: "ontimebuilding",
  },
  {
    title: "Reasonable Price",
    content:
      "We offer affordable construction services without compromising on quality. Our transparent pricing ensures you get exceptional value for your investment.",
    image: "/standard.png",
    alt: "standardbuilding",
  },
];

const WhyChooseUs = () => {
  return (
    <Box className="bg-[#833ab4]/20">
      <SectionContainer className="py-6">
        {/* Main Content */}
        <Box className="container mx-auto px-4 py-16">
          <h2 className="text-center md:text-[30px] lg:text-[30px] tracking-wider font-bold mb-10">
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
                    "w-full text-left justify-between items-center p-3 rounded-lg transition-all duration-300 border-l-4 text-[20px] font-semibold flex",
                    "data-[state=active]:bg-gradient-to-br from-[#833ab4] via-[#d9420f]/70 to-[#833ab4] data-[state=active]:text-white data-[state=active]:border-white",
                    "hover:bg-[#f0542d]/30 bg-white shadow-lg border-transparent"
                  )}
                >
                  <span>{tab.title}</span>
                  <ChevronRight
                    className={cn(
                      "transition-opacity duration-300 ml-2 text-white"
                    )}
                  />
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content (Right Side) */}
            <Box className="w-2/3 lg:w-3/5">
              {tabItems.map((tab, index) => (
                <TabsContent
                  key={index}
                  value={index.toString()}
                  className="relative h-[350px] rounded-2xl overflow-hidden m-0 bg-gradient-to-br from-[#833ab4] via-[#d9420f]/70 to-[#833ab4]"
                >
                  {/* <Box
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${tab.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  > */}
                  {/* Backdrop overlay */}
                  {/* <Box className="absolute inset-0 bg-white"></Box> */}

                  {/* Content */}
                  <Box className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
                    <Text variant="h3" className="text-3xl font-bold mb-6">
                      {tab.title}
                    </Text>
                    <Text className="text-lg font-medium leading-relaxed">
                      {tab.content}
                    </Text>
                  </Box>
                  {/* </Box> */}
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
    </Box>
  );
};

export default WhyChooseUs;
