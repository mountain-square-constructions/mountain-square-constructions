import {
  Server,
  PenToolIcon as Tool,
  Smartphone,
  Truck,
  Users,
  BarChart,
  ShoppingBag,
} from "lucide-react";
import SectionContainer from "./section-container";
import { Button } from "@/components/ui/button";
import Box from "./box";
import Text from "./text";

const WhoWeAre = () => {
  const expertiseAreas = [
    { icon: Server, text: "Information Technology" },
    { icon: Tool, text: "Enterprise Onsite & Field Services" },
    { icon: Smartphone, text: "Electronic Device Repair" },
    { icon: Truck, text: "Warehousing & Supply-Chain" },
  ];

  return (
    <Box className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <Box className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </Box>
      <SectionContainer className="">
        <Box className="">
          <Text
            variant="h2"
            className="font-[800] !text-[35px] text-center mb-5 font-nunito"
          >
            Who We Are
          </Text>
          <Box className="text-center mb-12">
            <Text
              variant="h3"
              className=" font-semibold text-lightforeground mb-4"
            >
              A Team with 125+ Years of Combined Professional Experience
            </Text>
            <Text className=" mb-6 max-w-4xl mx-auto">
              We are a team of dedicated professionals, each bringing a wealth
              of experience from reputed global organizations. Our diverse
              expertise contributes to a rich tapestry of skills and insights,
              enabling us to offer comprehensive solutions.
            </Text>
            <Text className=" mb-6 max-w-4xl mx-auto">
              Guided by principles of transparency and trust, we aim to elevate
              the standards of IT Infrastructure Services. Our approach balances
              practicality with innovation, ensuring reliable and ethical IT
              Infrastructure solutions that meet our clients' needs.
            </Text>
          </Box>

          <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 ">
            {expertiseAreas.map((area, index) => (
              <Box
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <area.icon className="w-12 h-12 text-blue-500 mb-4" />
                <Text className="text-center font-medium ">{area.text}</Text>
              </Box>
            ))}
          </Box>

          {/* <Box className="text-center">
            <Text className="text-lightforeground mb-8">
              We invite you to join us on this journey in making a meaningful
              impact in various fields catering to Enterprise IT Services.
            </Text>

            <Button className="rounded-lg transition duration-300 ease-in-out transform hover:scale-105 h-14 text-[20px] px-4 bg-blueforeground hover:bg-blueforeground/90">
              Join Our Journey
            </Button>
          </Box> */}
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default WhoWeAre;
