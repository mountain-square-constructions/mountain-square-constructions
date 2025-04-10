"use client";

import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import Text from "../text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Footer = () => {
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
    <Box className="bg-[#833ab4]/20">
      <SectionContainer className="pb-6">
        <Box className="flex flex-col !space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start">
          <Box className="">
            <Box className="flex flex-col justify-center items-center w-full lg:w-auto ">
              <Image
                src="/mountain-square-logo.png"
                alt="logo"
                width={150}
                height={130}
                priority
                className="rounded-full"
              />
              <Box className="flex flex-col">
                <Text className="text-[20px] font-medium text-center max-w-sm mt-3">
                  {" "}
                  Delivering high-quality, innovative construction projects with
                  precision and care.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="mr-0 md:mr-10">
            <Text className="text-[20px] font-bold mb-0 md:mb-3">
              Quick Links
            </Text>
            <ul className="space-y-3 text-[18px] font-medium ml-5 md:ml-2">
              <li className="relative group max-w-fit">
                {" "}
                <Link href="/">Home</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                {" "}
                <Link href="/about-us">About</Link>{" "}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                {" "}
                <Link href="/projects">Projects</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                {" "}
                <Link href="/contact">Contact us</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
            </ul>
          </Box>
          <Box className="">
            <Text className="text-[20px] font-bold mb-0 md:mb-3">
              {" "}
              Services
            </Text>
            <ul className="space-y-3 text-[18px] font-medium ml-5 md:ml-2">
              <li className="relative group max-w-fit">
                <Link href="/services">Construction of Individual Houses</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services">Interior Design and Execution</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services"> 2D & 3D Architectural Planning</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services"> Renovation of Existing Buildings</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box className="flex flex-col md:flex-row md:items-center justify-between text-white font-normal mt-5 text-[14px] bg-[#d9420f] px-2 py-3 rounded-lg ">
          <Text className="text-[16px]">
            © 2025 mountainsquareconstruction.com All rights reserved.
          </Text>
          <Text className="ml-5 md:ml-0 !whitespace-normal text-wrap">
            {" "}
            <Link
              href="mailto:contact@mountainsquareconstruction.com"
              className="text-wrap !whitespace-normal"
            >
              {" "}
              contact@mountainsquareconstruction.com
            </Link>
          </Text>
          <Text
            className="underline cursor-pointer ml-5 md:ml-0"
            onClick={() => handleClick("+91 83109 85053")}
          >
            +91 83109 85053
          </Text>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Footer;
