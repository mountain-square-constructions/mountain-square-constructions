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
            Mountain square Constructions
          </Text>
          <Text className="md:text-[25px] lg:text-[25px] font-semibold text-center text-[#f0542d]">
            We Build Your Dream
          </Text>
          <Text className="mt-8 lg:text-[25px] text-center text-pretty">
            At
            <span className="text-[#f0542d] font-semibold">
              {" "}
              Mountain Square Constructions,{" "}
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
          <Box className="bg-gradient-to-tr from-[#833ab4]/80 via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="md:text-[25px] text-white lg:text-[25px] font-semibold mb-3 flex items-center gap-x-4">
              Construction of Independent/Individual Houses
            </Text>
            <Text className=" text-white">
              We specialize in building custom homes that reflect your unique
              style and needs, ensuring quality craftsmanship and attention to
              detail in every project. From foundation to finishing touches, we
              bring your dream home to life.
            </Text>
          </Box>
          <Box className="bg-gradient-to-bl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold flex items-center gap-x-4">
              Interior Design and Execution
            </Text>

            <Text className=" text-white">
              Our expert designers create functional and aesthetically pleasing
              interiors, tailoring each space to suit your lifestyle. We handle
              everything from concept to execution, ensuring your vision is
              realized beautifully.
            </Text>
          </Box>
          <Box className="bg-gradient-to-tl from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold text-center flex items-center  gap-x-4">
              {" "}
              2D & 3D Architectural Planning
            </Text>
            <Text className=" text-white">
              {" "}
              We provide detailed 2D and 3D architectural plans to give you a
              clear vision of your project before construction begins. Our
              designs combine creativity, functionality, and precision to guide
              your project seamlessly from start to finish.
            </Text>{" "}
          </Box>
          <Box className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#d9420f] p-7 rounded-xl">
            <Text className="text-white mb-2 md:text-[25px] lg:text-[25px] font-semibold text-center flex items-center justify-start gap-x-4">
              {" "}
              {/* <Sparkles fill="#fff" className="mb-3" /> */}
              Renovation and Remodeling of Existing Buildings
            </Text>
            <Text className=" text-white">
              {" "}
              We breathe new life into old spaces through expert renovation and
              remodeling services. Whether updating interiors or enhancing
              structural elements, we transform your existing building into
              something fresh and modern.
            </Text>{" "}
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Box className="grid grid-cols-1 md:grid-cols-2  gap-x-20">
          <Box className="text-center">
            <Eye size={100} fill="#e64a27" stroke="#fff" className="mx-auto" />
            <Text variant="h2">OUR VISION</Text>
            <Text className="lg:text-[20px] text-center text-pretty mt-5">
              To be a leader in innovative, sustainable construction that shapes
              communities and enhances lives.
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
              Delivering high-quality, efficient construction services while
              exceeding client expectations and maintaining the highest
              standards.
            </Text>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
};

export default AboutUs;
