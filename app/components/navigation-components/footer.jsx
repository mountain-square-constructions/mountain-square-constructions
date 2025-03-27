import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import Text from "../text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <Box className="bg-[#f0542d]">
      <SectionContainer>
        <Box className="grid grid-cols-1 space-y-4 sm:grid-cols-2 sm:space-y-3 md:grid-cols-5 md:space-y-0 justify-between items-start">
          <Box className="flex flex-col justify-start w-full lg:w-auto">
            <Image
              src="/mountain-square-white-logo.png"
              alt="logo"
              width={100}
              height={80}
              priority
            />
            <Text className="text-[16px] font-normal  text-white mt-3 mr-10">
              {" "}
              Best construction company driven by passion towards the Dream
              Bulding of our customers
            </Text>
          </Box>
          <Box>
            <Text className="text-[20px] font-bold text-white mb-3">
              Quick Links
            </Text>
            <ul className="space-y-3 text-[18px] font-medium text-white ml-2">
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
          <Box>
            <Text className="text-[20px] font-bold text-white mb-3">
              {" "}
              Services
            </Text>
            <ul className="space-y-3 text-[18px] font-medium text-white">
              <li className="relative group max-w-fit">
                <Link href="/services">Renovation</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services">Individual house</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services"> Interior Designing</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
            </ul>
          </Box>
          <Box>
            <Text className="text-[20px] font-bold text-white mb-3"> Info</Text>
            <ul className="space-y-3 text-[18px] font-medium text-white">
              <li className="relative group max-w-fit">
                <Link href="/services">Blogs</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services">Privacy policy</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
              <li className="relative group max-w-fit">
                <Link href="/services"> Terms and Conditions</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </li>
            </ul>
          </Box>
          <Box className="space-y-3 text-[18px] font-medium text-white">
            <Text className="text-[20px] font-bold text-white mb-3">
              {" "}
              Contact
            </Text>
            <Text> Info@mountainsquareconstructions.com</Text>
            <Box className="flex items-center w-full">
              <Input className="rounded-none" />
              <Button
                variant="outline"
                className="bg-white text-foreground hover:bg-white/80 rounded-none bg-transparent text-white"
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="border-b bg-white w-full mt-6" />
        <Box className="flex flex-col md:flex-row md:items-center justify-between mt-5 text-white font-normal text-[14px]">
          <Text className="text-[16px]">
            © 2025 Mountain Square.com All rights reserved.
          </Text>
          <Text className="text-[16px] ">
            <Link className="underline" href="/">
              {" "}
              Privacy Policy
            </Link>
          </Text>
          <Text className="text-[16px]">
            <Link className="underline" href="/">
              {" "}
              Terms of Service
            </Link>
          </Text>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Footer;
