import React from "react";
import SectionContainer from "./section-container";
import Text from "./text";
import Box from "./box";
import Image from "next/image";
import { Building, CalendarDays, HomeIcon, UserRound } from "lucide-react";

const AboutusSection = () => {
  return (
    <Box className="bg-[#fbfbfb]">
      <SectionContainer>
        <Text
          variant="h2"
          className="text-[#f0542d] text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
        >
          About Us
        </Text>
        <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center">
          <Box>
            <Image
              src="/bestquality.jpg"
              alt="qualitybuilding"
              width={400}
              height={300}
              className="w-full h-[300px] rounded-3xl"
            />
          </Box>
          <Box>
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
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Text
          variant="h2"
          className="text-[#f0542d] text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
        >
          Why Hire us
        </Text>
        <Box className="bg-background shadow-lg py-5 rounded-2xl xl:rounded-full px-0 md:px-32">
          <Box className="flex flex-col space-y-4 xl:space-y-0 xl:flex-row justify-between items-center">
            <Box>
              <Box className="flex items-center gap-x-3">
                <CalendarDays
                  fill="#f0542d"
                  className="mx-auto"
                  size={50}
                  stroke="#fff"
                />
                <Text className="text-[35px] xl:text-[50px] font-bold text-[#f0542d] leading-8">
                  25 +{" "}
                </Text>
              </Box>
              <Text className="text-[30px] xl:text-[40px] font-medium text-center">
                Experience
              </Text>
            </Box>
            <Box>
              <Box className="flex items-center gap-x-3">
                <Building
                  fill="#f0542d"
                  className="mx-auto"
                  size={50}
                  stroke="#fff"
                />
                <Text className="text-[35px] xl:text-[50px] font-bold text-[#f0542d] leading-8">
                  180 +{" "}
                </Text>
              </Box>
              <Text className=" text-[30px] xl:text-[40px]  font-medium text-center">
                Projects
              </Text>
            </Box>
            <Box>
              <Box className="flex items-center gap-x-3">
                <UserRound
                  fill="#f0542d"
                  className="mx-auto"
                  size={50}
                  stroke="#fff"
                />
                <Text className="text-[35px] xl:text-[50px] font-bold text-[#f0542d] leading-8">
                  500 +{" "}
                </Text>
              </Box>
              <Text className="text-[30px] xl:text-[40px]  font-medium text-center">
                Happy Clients
              </Text>
            </Box>
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default AboutusSection;
