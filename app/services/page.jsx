"use client";

import React, { useState } from "react";
import SectionContainer from "../components/section-container";
import Text from "../components/text";
import Box from "../components/box";
import Image from "next/image";

import { Home, PaintBucket, Rotate3d, RefreshCw } from "lucide-react";
<Rotate3d />;
const ServiceCard = ({ icon: Icon, title, description, brandColor, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder */}
      <Box className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <Box className="absolute top-40 left-4 z-20">
          <Icon
            className="w-20 h-20 p-5"
            style={{
              color: isHovered ? brandColor : "white",
              backgroundColor: isHovered ? "white" : "rgba(0,0,0,0.3)",
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <Box className="p-6 z-0">
        <Text variant="h3" className="text-xl font-bold mb-3">
          {title}
        </Text>
        <Text className="text-gray-600 mb-4">{description}</Text>
      </Box>
    </Box>
  );
};

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Construction of Independent/Individual Houses",
      description:
        "We specialize in crafting custom homes that perfectly reflect your unique style and needs. From the foundation to the final touches, we ensure exceptional quality and attention to detail, transforming your vision into a dream home that stands the test of time.",
      brandColor: "#f0542d",
      img: "/slider1.jpg",
    },
    {
      icon: PaintBucket,
      title: "Interior Design and Execution",
      description:
        "Our team of expert designers creates spaces that are both functional and visually stunning. Tailored to suit your lifestyle, we manage every aspect of the design and execution process to bring your vision to life with elegance and precision.",
      brandColor: "#f0542d",
      img: "/slider3.jpg",
    },
    {
      icon: Rotate3d,
      title: "2D & 3D Architectural Planning",
      description:
        "We offer detailed 2D and 3D architectural plans that provide a clear, accurate representation of your project. Combining creativity and technical expertise, we ensure a seamless transition from concept to construction, guiding you through each stage with precision.",
      brandColor: "#f0542d",
      img: "/slider2.jpg",
    },

    {
      icon: RefreshCw,
      title: "Renovation and Remodeling of Existing Buildings",
      description:
        "Breathe new life into your existing spaces with our expert renovation and remodeling services. Whether enhancing interiors or updating structural elements, we help modernize and refresh your building while maintaining its character and integrity.",
      brandColor: "#f0542d",
      img: "/renovationhouse.avif",
    },
  ];

  return (
    <>
      <Box className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
        {/* Background Image */}
        <Image
          src="/slider3.jpg"
          alt="Projects Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Overlay for better text visibility */}
        <Box className="absolute inset-0 bg-black/50" />

        {/* Content Container */}
        <Box className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <SectionContainer>
            <Text
              variant="h2"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Services
            </Text>
            <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Explore our wide range of construction services, from custom homes
              to expert renovations, all designed to exceed your expectations.
            </Text>
          </SectionContainer>
        </Box>
      </Box>
      <SectionContainer className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              image={service.img}
              description={service.description}
              brandColor={service.brandColor}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default Services;
