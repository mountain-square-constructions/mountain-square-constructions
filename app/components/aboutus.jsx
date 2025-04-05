import React from "react";
import SectionContainer from "./section-container";
import Text from "./text";
import Box from "./box";
import Image from "next/image";
import {
  Building,
  CalendarDays,
  ChevronRight,
  HomeIcon,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AboutusSection = () => {
  const stats = [
    {
      icon: CalendarDays,
      value: "25+",
      label: "Years Experience",
    },
    {
      icon: Building,
      value: "180+",
      label: "Projects Completed",
    },
    {
      icon: UserRound,
      value: "500+",
      label: "Happy Clients",
    },
  ];
  return (
    <Box className="bg-[#fbfefb]">
      <SectionContainer>
        <Text
          variant="h2"
          className="text-[#f0542d] text-center text-[30px] md:text-[35px] lg:text-[35px] font-bold mb-10"
        >
          About Us
        </Text>
        <Box className="grid md:grid-cols-12 md:gap-y-0 md:gap-x-20 items-center">
          {/* <Box>
            <Image
              src="/bestquality.jpg"
              alt="qualitybuilding"
              width={400}
              height={300}
              className="w-full h-[300px] rounded-3xl"
            />
          </Box> */}
          <Box className="md:col-span-9">
            <Text className="md:text-[23px] lg:text-[23px] font-bold text-[#f0542d]">
              Mountain square Construction
            </Text>
            {/* <Text className="md:text-[20px] lg:text-[20px] font-semibold text-[#f0542d]">
            We Build Your Dream
          </Text> */}
            <Text className="mt-3 lg:text-[18px] text-pretty">
              At
              <span className="text-[#f0542d] font-semibold">
                {" "}
                Mountain Square Construction,{" "}
              </span>{" "}
              we specialize in delivering high-quality residential, commercial,
              and industrial projects. With years of experience, we combine
              innovation, precision, and sustainable practices to create
              structures that stand the test of time. Our team of skilled
              professionals ensures every project is completed on time, within
              budget, and to the highest standards
            </Text>
            <Text className="mt-3 lg:text-[18px] text-pretty">
              We take pride in turning our clients' visions into reality, from
              design to completion. Our commitment to craftsmanship and customer
              satisfaction has earned us a trusted reputation in the industry.
              Let us build your future with quality and care.
            </Text>
          </Box>
          <Box className="md:col-span-3">
            <Link
              href="/about-us"
              className="font-semibold underline text-[18px] flex items-center hover:scale-105 hover:gap-x-3 transistion-transform duration-300 ease-linear"
            >
              About Company <ChevronRight />
            </Link>
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer className="py-0">
        <Text
          variant="h2"
          className="text-[#f0542d] text-center text-[30px] md:text-[35px] lg:text-[35px] font-bold mb-5"
        >
          Why Hire us
        </Text>
        <Box className="mx-auto px-4 py-4">
          <Box className="bg-background shadow-xl py-8 px-6 md:px-10 lg:px-16 rounded-2xl xl:rounded-[30px]">
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-4 lg:gap-x-8">
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  className={cn(
                    "flex flex-col items-center justify-center text-center",
                    "md:border-r-0 md:last:border-r-0",
                    index !== stats.length - 1 &&
                      "md:border-r-2 md:border-gray-200"
                  )}
                >
                  <Box className="flex items-center justify-center gap-x-3 mb-2">
                    <stat.icon
                      fill="#f0542d"
                      size={42}
                      className="flex-shrink-0"
                      stroke="#fff"
                    />
                    <Text className="text-[32px] sm:text-[40px] xl:text-[50px] font-bold text-[#f0542d] leading-tight">
                      {stat.value}
                    </Text>
                  </Box>
                  <Text className="text-[22px] sm:text-[26px] xl:text-[32px] font-medium text-center">
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default AboutusSection;
