import React from "react";
import { Award, Shield, Target, Truck, Handshake, Mail } from "lucide-react";
import Box from "./box";
import Link from "next/link";
import Text from "./text";
import SectionContainer from "./section-container";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={28} className="text-yellow-600" />,
      title: "Unmatched Expertise",
      description:
        "Our team's vast experience across key sectors enriches our solutions, allowing us to craft strategies that are finely attuned to the specifics of your business.",
    },
    {
      icon: <Shield size={28} className="text-blue-600" />,
      title: "Commitment to Ethics",
      description:
        "We operate on a foundation of integrity, ensuring that every interaction and solution is transparent, fair, and ethically sound.",
    },
    {
      icon: <Target size={28} className="text-green-600" />,
      title: "Customized Strategic Solutions",
      description:
        "We specialize in tailoring our services to optimally manage your IT assets throughout their lifecycle, delivering not just support, but strategic enhancement of your resources.",
    },
    {
      icon: <Truck size={28} className="text-purple-600" />,
      title: "Robust Nationwide Support",
      description:
        "With extensive logistics capabilities across India, our responsive support network is always within reach, ensuring swift and efficient service delivery.",
    },
    {
      icon: <Handshake size={28} className="text-red-600" />,
      title: "A Partnership Built on Trust",
      description:
        "We're more than a service provider; we are a partner invested in your success, dedicated to providing solutions that propel your operations and uphold our shared values.",
    },
  ];

  return (
    <Box className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
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

      {/* Main Content */}
      <SectionContainer>
        <Text
          variant="h2"
          className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
        >
          {" "}
          Why choose Us
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
            <Text variant="h2">Best Quality</Text>
            <Text className="font-medium mt-4">
              Quality consciousness is a culture that is imbibed in our company.
              This is in fact a habit cultivated with sheer dedication and a
              continuous improvement process. Our team is led by Engineers who
              have excelled incorporates for their quality standards and the
              in-house workforce are trained to deliver the right job every time
              without rework or revisit.
            </Text>
          </Box>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center my-10">
          <Box className="order-2 md:order-1">
            <Text variant="h2">100% Adherence to Standards</Text>
            <Text className="font-medium mt-4">
              The construction industry is vastly driven by Semiskilled
              workforce, It is in this background that we take pride in our
              Professional knowledge of Building codes and Construction
              standards. Our in house Architects and Structural Consultant set
              the best benchmark in the industry and we always ensure 100%
              STRUCTURAL CLEARANCE AND BUILDING CODE ADHERENCE.
            </Text>
          </Box>
          <Box className="order-1 md:order-2">
            <Image
              src="/standard.png"
              alt="standardbuilding"
              width={400}
              height={300}
              className="w-full h-[300px] rounded-3xl"
            />
          </Box>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2  md:gap-x-20 items-center">
          <Box>
            <Image
              src="/Budget.jpg"
              alt="Budgetbuilding"
              width={400}
              height={300}
              className="w-[500px] h-[500px] rounded-3xl mx-auto"
            />
          </Box>
          <Box>
            <Text variant="h2">Affordable & Transparent Pricing </Text>
            <Text className="font-medium mt-4">
              Integrity is our core company value. Our contract with the client
              will provide clear cost breakup and we stick to these obligation
              at all times. TRANSPARENCY & AFFORDABILITY is our core strength.
            </Text>
          </Box>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center my-10">
          <Box className="order-2 md:order-1">
            <Text variant="h2">On-Time Every time </Text>
            <Text className="font-medium mt-4">
              TIME IS MONEY. This is true for us as a Construction engineer as
              well as the client. We take pride that all our projects will be
              handed over on time. This involves meticulous resource planning
              and construction methods, we are adept at meeting this challenge
              under all circumstances.
            </Text>
          </Box>
          <Box className="order-1 md:order-2">
            <Image
              src="/ontime.jpeg"
              alt="ontimebuilding"
              width={400}
              height={300}
              className="w-full h-[400px] rounded-3xl mx-auto"
            />
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default WhyChooseUs;
