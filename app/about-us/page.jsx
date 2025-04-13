import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import {
  Award,
  Building,
  CalendarDays,
  Cog,
  Construction,
  Eye,
  HardHat,
  Sparkles,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import WhyChooseUs from "../components/why-choose-us";

export const metadata = {
  title: "About Mountain Square Construction",
  description: `Learn more about Mountain Square Construction, a trusted leader in residential, commercial, and industrial construction. Our experience, innovation, and craftsmanship define our success.`,
  Keywords: [
    "About Mountain Square Construction",
    "Mountain Square company",
    "trusted construction company",
    "building expertise",
    "innovative construction solutions",
    "sustainable construction practices",
  ],
  openGraph: {
    title: "About Mountain Square Construction",
    description:
      "Learn more about Mountain Square Construction, a trusted leader in residential, commercial, and industrial construction. Our experience, innovation, and craftsmanship define our success.",
    url: "https://mountainsquareconstruction.com/",
    siteName: "Mountain Square Construction",
    images: [
      {
        url: "https://mountainsquareconstruction.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AboutUs = () => {
  const stats = [
    {
      icon: CalendarDays,
      value: "10+",
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
    <>
      <SectionContainer>
        <Box>
          <Text className="md:text-[35px] lg:text-[35px] text-center font-bold text-[#f0542d]">
            About us
          </Text>
          <Text className="md:text-[40px] lg:text-[40px] text-center font-bold text-[#f0542d]">
            Mountain Square Construction
          </Text>
          <Text className="md:text-[25px] lg:text-[25px] font-semibold text-center text-[#f0542d]">
            We Build Your Dream
          </Text>
          <Text className="mt-8 lg:text-[25px] text-center text-pretty">
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
          <Text className="mt-8 lg:text-[25px] text-center text-pretty">
            We take pride in turning our clients' visions into reality, from
            design to completion. Our commitment to craftsmanship and customer
            satisfaction has earned us a trusted reputation in the industry. Let
            us build your future with quality and care.
          </Text>
        </Box>
      </SectionContainer>
      <SectionContainer className="py-8">
        <Text
          variant="h2"
          className=" font-semibold text-[#e64a27] text-center md:text-[35px] lg:text-[35px]"
        >
          Building Your Vision with Our Services
        </Text>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-20 my-10">
          {" "}
          <Box className="bg-gradient-to-tr from-[#833ab4]/80 via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl flex flex-col">
            <Text className="md:text-[25px] text-white lg:text-[25px] font-semibold mb-3 flex items-center gap-x-4">
              Construction of Independent/Individual Houses
            </Text>
            <Text className=" text-white mt-auto">
              We specialize in building custom homes that reflect your unique
              style and needs, ensuring quality craftsmanship and attention to
              detail in every project. From foundation to finishing touches, we
              bring your dream home to life.
            </Text>
          </Box>
          <Box className="bg-gradient-to-bl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl flex flex-col">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold flex items-center gap-x-4">
              Interior Design and Execution
            </Text>

            <Text className=" text-white mt-auto">
              Our expert designers create functional and aesthetically pleasing
              interiors, tailoring each space to suit your lifestyle. We handle
              everything from concept to execution, ensuring your vision is
              realized beautifully.
            </Text>
          </Box>
          <Box className="bg-gradient-to-tl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl flex flex-col">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold text-center flex items-center  gap-x-4">
              {" "}
              2D & 3D Architectural Planning
            </Text>
            <Text className=" text-white mt-auto">
              {" "}
              We provide detailed 2D and 3D architectural plans to give you a
              clear vision of your project before construction begins. Our
              designs combine creativity, functionality, and precision to guide
              your project seamlessly from start to finish.
            </Text>{" "}
          </Box>
          <Box className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold flex flex-col">
              {" "}
              {/* <Sparkles fill="#fff" className="mb-3" /> */}
              Renovation and Remodeling of Existing Buildings
            </Text>
            <Text className=" text-white mt-auto">
              {" "}
              We breathe new life into old spaces through expert renovation and
              remodeling services. Whether updating interiors or enhancing
              structural elements, we transform your existing building into
              something fresh and modern.
            </Text>{" "}
          </Box>
        </Box>
      </SectionContainer>
      <Box>
        <WhyChooseUs />
      </Box>
      <SectionContainer className="pt-0 mt-10">
        <Box className="grid grid-cols-1 md:grid-cols-2  gap-x-20">
          <Box className="text-center">
            {/* <Eye size={100} fill="#e64a27" stroke="#fff" className="mx-auto" /> */}
            <Image
              src="/bulb.png"
              alt="mission"
              width={100}
              height={100}
              className="mx-auto"
            />
            <Text variant="h2" className="mt-3">
              OUR VISION
            </Text>
            <Text className="lg:text-[20px] text-center text-pretty mt-5">
              To be a leader in innovative, sustainable construction that shapes
              communities and enhances lives.
            </Text>
          </Box>
          <Box className="text-center">
            {/* <Award
              size={100}
              fill="#e64a27"
              stroke="#fff"
              className="mx-auto"
            /> */}
            <Image
              src="/mission.png"
              alt="mission"
              width={100}
              height={100}
              className="mx-auto"
            />
            <Text variant="h2" className="mt-3">
              OUR MISSION
            </Text>
            <Text className="lg:text-[20px] text-center text-pretty mt-5">
              Delivering high-quality, efficient construction services while
              exceeding client expectations and maintaining the highest
              standards.
            </Text>
          </Box>
        </Box>

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

        <Box className="mt-20 mb-5">
          <Text
            variant="h2"
            className=" font-semibold text-[#e64a27] text-[30px] text-center md:text-[35px] lg:text-[35px]"
          >
            {" "}
            Our Team
          </Text>
          <Box className="flex items-center justify-center my-20">
            <Text className="text-[18px] font-medium flex items-center gap-x-3">
              Under construction
              <Construction fill="#e64a27" stroke="#e64a27" size={30} />
            </Text>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
};

export default AboutUs;
