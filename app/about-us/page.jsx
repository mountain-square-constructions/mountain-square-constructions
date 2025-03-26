import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { Award, Eye, Sparkles } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <SectionContainer>
        <Box>
          <Text className="md:text-[35px] lg:text-[35px] text-center font-bold text-[#f0542d]">
            About us
          </Text>
          <Text className="md:text-[40px] lg:text-[40px] text-center font-bold text-[#f0542d]">
            Mountain square Constructions Pvt Ltd
          </Text>
          <Text className="md:text-[25px] lg:text-[25px] font-semibold text-center text-[#f0542d]">
            We Build Your Dream
          </Text>
          <Text className="mt-8 lg:text-[25px] text-center text-pretty">
            Founded on principles of excellence and integrity,{" "}
            <span className="text-[#f0542d] font-semibold">
              {" "}
              Mountain Square Constructions Pvt Ltd{" "}
            </span>{" "}
            stands as a pillar in the construction industry with{" "}
            <span className="text-[#f0542d] font-semibold">
              {" "}
              25 years of comprehensive experience{" "}
            </span>
            in construction, architecture, and design. Our journey has been
            defined by a commitment to quality craftsmanship, reasonable
            pricing, and punctual service delivery. Led by a visionary with a
            quarter-century of industry expertise, we have successfully
            delivered numerous landmark projects across diverse sectors:
          </Text>
        </Box>
      </SectionContainer>
      <SectionContainer className="py-8">
        <Text
          variant="h2"
          className=" font-semibold text-[#e64a27] text-center md:text-[35px] lg:text-[35px]"
        >
          We are Offering
        </Text>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-20 my-10">
          {" "}
          <Box className="bg-gradient-to-tr from-[#833ab4]/80 via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="md:text-[25px] text-white lg:text-[25px] font-semibold mb-3 flex items-center gap-x-4">
              Individual Houses & construction
            </Text>
            <Text className=" text-white">
              We've completed <b>15 residential projects </b> with 3 currently
              in progress, each reflecting our dedication to creating living
              spaces that blend functionality with aesthetic appeal.
            </Text>
          </Box>
          <Box className="bg-gradient-to-bl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold flex items-center gap-x-4">
              Renovation & Fit-out Specialists
            </Text>

            <Text className=" text-white">
              Our portfolio includes <b>16 completed renovation </b>and fit-out
              projects, alongside various specialized service engagements
              tailored to specific client requirements.
            </Text>
          </Box>
          <Box className="bg-gradient-to-tl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold text-center flex items-center  gap-x-4">
              {" "}
              Interior Design Mastery
            </Text>
            <Text className=" text-white">
              {" "}
              We've transformed over <b> 7,000 square feet </b> of interior
              spaces across Bangalore, bringing creative vision to life through
              meticulous attention to detail.
            </Text>{" "}
          </Box>
          {/* <Box className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
              <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold text-center flex items-center justify-start gap-x-4">
                {" "}
                <Sparkles fill="#fff" className="mb-3" />
                Commercial Project Achievements
              </Text>
              <Text className=" text-white">
                {" "}
                Delivered <b>2,300 square feet </b> of office interiors under
                tight 30-day deadlines - Successfully completed{" "}
                <b>80,000 square feet </b> of civil hard finishes for
                prestigious developments - Executed fast-track completion of
                22,000+ square feet of masonry and plastering work -
                Accomplished over 250,000 square feet of specialized finishing
                work on large-scale projects
              </Text>{" "}
            </Box> */}
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Box className="grid grid-cols-1 md:grid-cols-2  gap-x-20">
          <Box className="text-center">
            <Eye size={100} fill="#e64a27" stroke="#fff" className="mx-auto" />
            <Text variant="h2">OUR VISION</Text>
            <Text className="lg:text-[20px] text-center text-pretty mt-5">
              Sit lectus amet quis vitae nunc volutpat. Sapien, senectus in a,
              enim amet. Etiam libero in euismod massa.Explore our Recent
              Projects Explore our Recent Projects.
            </Text>
          </Box>
          <Box className="text-center">
            <Award
              size={100}
              fill="#e64a27"
              stroke="#fff"
              className="mx-auto"
            />
            <Text variant="h2">OUR MISSION</Text>
            <Text className="lg:text-[20px] text-center text-pretty mt-5">
              Sit lectus amet quis vitae nunc volutpat. Sapien, senectus in a,
              enim amet. Etiam libero in euismod massa.Explore our Recent
              Projects Explore our Recent Projects.
            </Text>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
};

export default AboutUs;
