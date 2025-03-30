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
    <Box className="bg-[#f0542d]">
      <SectionContainer>
        <Box className="flex flex-col md:flex-row justify-between items-start">
          <Box className="">
            <Box className="flex flex-col justify-center items-center w-full lg:w-auto ">
              <Image
                src="/mountain-square-white-logo.png"
                alt="logo"
                width={150}
                height={130}
                priority
              />
              <Box className="flex flex-col">
                <Text className="text-[20px] font-medium text-center max-w-sm text-white mt-3">
                  {" "}
                  Delivering high-quality, innovative construction projects with
                  precision and care.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="mr-0 md:mr-10">
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
          <Box className="">
            <Text className="text-[20px] font-bold text-white mb-3">
              {" "}
              Services
            </Text>
            <ul className="space-y-3 text-[18px] font-medium text-white">
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
          {/* <Box>
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
          </Box> */}
          <Box className="space-y-3 text-[18px] font-medium text-white ">
            <Text className="text-[20px] font-bold text-white mb-3">
              {" "}
              Contact
            </Text>
            <Text>
              {" "}
              <Link href="mailto:contact@mountainsquareconstruction.com">
                {" "}
                contact@mountainsquareconstruction.com
              </Link>
            </Text>
            <Box>
              <Text className="text-[25px] font-semibold mb-1">
                Phone Number
              </Text>
              <Text
                className="underline cursor-pointer"
                onClick={() => handleClick("+919059745631")}
              >
                +91 90597 45631
              </Text>
              <Text
                className="underline cursor-pointer"
                onClick={() => handleClick("+919059745631")}
              >
                +91 80744 81787
              </Text>
            </Box>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-transparent/10 rounded-none w-fit mt-3"
            >
              <Link
                className="!font-semibold text-white text-[18px] "
                href="https://www.google.com/maps/place/Hulimangala/@12.8202881,77.6374595,21z/data=!4m14!1m7!3m6!1s0x3bae6b33355ff423:0x1533cdb66f43998f!2sRama+Reddy+Building!8m2!3d12.7883295!4d77.6309192!16s%2Fg%2F11q3ltljdt!3m5!1s0x3bae6b00347d8c2f:0x5cc42e1525647ca6!8m2!3d12.8203779!4d77.6374981!16s%2Fg%2F11wtzsvxrx?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
                target="blank"
              >
                Click here to view on Google Maps
              </Link>
            </Button>
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
