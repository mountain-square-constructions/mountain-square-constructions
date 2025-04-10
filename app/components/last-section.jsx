"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import Box from "./box";
import Text from "./text";
import SectionContainer from "./section-container";
import Link from "next/link";

const CTASection = () => {
  const handleClick = (phoneNumber) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      // If screen is large (desktop), copy to clipboard
      navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard!");
    } else {
      // If screen is small (mobile), open the dialer
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <SectionContainer className="py-16 ">
      <Box className="container mx-auto px-4">
        <Box className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Build Your Dream?
          </h2>
          <Text className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Don't wait to start your project. Our construction experts are ready
            to turn your vision into reality with quality craftsmanship and
            guaranteed satisfaction.
          </Text>

          <Box className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] hover:bg-[#f0542d]/90 hover:bg-[#d94020] text-white py-6 px-8 text-lg rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-black hover:bg-white hover:text-gray-900 py-6 px-8 text-lg rounded-lg flex items-center gap-2 transition-colors"
              onClick={() => handleClick("+91 83109 85053")}
            >
              <Phone className="w-5 h-5" />
              Call Us Now: +91 83109 85053
            </Button>
          </Box>
        </Box>

        {/* <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Box className="bg-[#f0542d]/10 p-6 rounded-lg backdrop-blur-sm text-center">
            <Box className="text-[#f0542d] font-bold text-5xl mb-2">24/7</Box>
            <Text className="text-xl font-medium">Customer Support</Text>
          </Box>

          <Box className="bg-[#f0542d]/10 p-6 rounded-lg backdrop-blur-sm text-center">
            <Box className="text-[#f0542d] font-bold text-5xl mb-2">100%</Box>
            <Text className="text-xl font-medium">Satisfaction Guarantee</Text>
          </Box>

          <Box className="bg-[#f0542d]/10 p-6 rounded-lg backdrop-blur-sm text-center">
            <Box className="text-[#f0542d] font-bold text-5xl mb-2">500+</Box>
            <Text className="text-xl font-medium">Projects Completed</Text>
          </Box>
        </Box> */}

        {/* <Text className="text-center mt-12 text-lg">
          <span className="font-semibold">
            Trusted by homeowners and businesses
          </span>{" "}
          across the region for over 15 years.
        </Text> */}
      </Box>
    </SectionContainer>
  );
};

export default CTASection;
