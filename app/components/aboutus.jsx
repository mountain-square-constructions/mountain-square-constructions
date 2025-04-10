import React from "react";
import SectionContainer from "./section-container";
import Text from "./text";
import Box from "./box";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const AboutusSection = () => {
  return (
    <Box className="bg-[#fbfefb]">
      <SectionContainer>
        <Text className="md:text-[25px] lg:text-[30px] font-bold text-[#f0542d] mb-8">
          Best House Construction Company in Bangalore
        </Text>
        <Box className="grid md:grid-cols-12 md:gap-y-0 md:gap-x-20 items-center">
          <Box className="md:col-span-9">
            <Text className="mt-3 lg:text-[18px] text-pretty">
              At
              <span className="text-[#f0542d] font-semibold">
                {" "}
                Mountain Square Construction,{" "}
              </span>{" "}
              we specialize in high-quality residential construction, commercial
              construction, and industrial construction projects in Bangalore.
              With{" "}
              <span className="text-[#f0542d] font-semibold">
                10+ years of experience
              </span>
              , our skilled team combines precision, innovation, and sustainable
              practices to create durable, timeless structures that
              exceed expectations.
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
    </Box>
  );
};

export default AboutusSection;
