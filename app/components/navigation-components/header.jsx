"use client";

import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCallIcon,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Box from "../box";
import SectionContainer from "../section-container";
import Text from "../text";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Top header section */}
      <SectionContainer className="py-3 md:py-5">
        <Box className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Box className="flex justify-center lg:justify-start w-full lg:w-auto">
            <Image
              src="/mountain-square-logo.webp"
              alt="logo"
              width={100}
              height={80}
              priority
            />
          </Box>

          {/* Contact information & CTA */}
          <Box className="flex flex-col md:flex-row items-center gap-4 lg:gap-x-6 xl:gap-x-16">
            {/* Phone */}
            <Box className="flex items-center gap-x-3">
              <PhoneCallIcon
                fill="#f0542d"
                stroke="#fff"
                size={40}
                className="hidden sm:block"
              />
              <Box className="text-center sm:text-left">
                <Text className="font-normal text-sm md:text-base">
                  Call Us:
                </Text>
                <Text className="font-semibold text-sm md:text-base">
                  9897695778
                </Text>
              </Box>
            </Box>

            {/* Email - only show on larger screens */}
            <Box className="flex items-center gap-x-3 hidden md:flex">
              <Mail fill="#f0542d" stroke="#fff" size={40} />
              <Box>
                <Text className="font-normal text-sm lg:text-base">
                  Email Us:
                </Text>
                <Text className="font-semibold text-sm lg:text-base truncate max-w-[200px] lg:max-w-full">
                  mountainsquareconstructions@gmail.com
                </Text>
              </Box>
            </Box>

            {/* CTA Button */}
            <Box className="flex items-center">
              <Button className="bg-[#f0542d] text-base md:text-xl lg:text-[23px] rounded-none h-10 md:h-12 lg:h-14 px-6 md:px-8 lg:px-10">
                Get a Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
};

export default Header;

export const SubHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const headercontent = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Services",
      href: "/services",
    },
    {
      id: 3,
      title: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <Box className="bg-[#f0542d] sticky top-0 z-50">
      <SectionContainer className="py-2 md:py-4 w-full">
        <Box className="flex items-center justify-between">
          {/* Mobile menu toggle */}
          <Box className="block lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#e64a27]"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </Button>
          </Box>

          {/* Desktop navigation */}
          <Box className="hidden lg:block">
            <ul className="flex items-center gap-x-10 xl:gap-x-20 text-[16px] xl:text-[20px] font-semibold text-white">
              {headercontent.map((item) => (
                <li
                  key={item.id}
                  className="relative group cursor-pointer py-2"
                >
                  <Link href={item.href}> {item.title}</Link>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
                </li>
              ))}
            </ul>
          </Box>

          {/* Mobile navigation drawer */}
          <Box
            className={`fixed inset-y-0 left-0 w-[80%] bg-[#f0542d] bg-opacity-80 z-50 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close button at top right */}
            <Box className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-[#e64a27]"
                onClick={closeMobileMenu}
              >
                <X size={24} />
              </Button>
            </Box>

            {/* Mobile menu links */}
            <ul className="flex flex-col items-center gap-y-6 pt-10 text-[20px] font-semibold text-white">
              {headercontent.map((item) => (
                <li
                  key={item.id}
                  className="relative group cursor-pointer py-2"
                >
                  <Link href={item.href} onClick={closeMobileMenu}>
                    {item.title}
                  </Link>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <Box className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-x-6">
              <Facebook
                fill="#f0542d"
                stroke="#fff"
                size={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <Instagram
                fill="#f0542d"
                stroke="#fff"
                size={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <Linkedin
                fill="#f0542d"
                stroke="#fff"
                size={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <Twitter
                fill="#f0542d"
                stroke="#fff"
                size={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </Box>
          </Box>

          {/* Social icons for desktop */}
          <Box className="hidden lg:flex items-center gap-x-4 md:gap-x-6 xl:gap-x-10">
            <Facebook
              fill="#f0542d"
              stroke="#fff"
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Instagram
              fill="#f0542d"
              stroke="#fff"
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Linkedin
              fill="#f0542d"
              stroke="#fff"
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Twitter
              fill="#f0542d"
              stroke="#fff"
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};
