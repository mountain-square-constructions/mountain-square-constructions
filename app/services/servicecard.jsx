"use client";

import { useState } from "react";
import { Home, PaintBucket, Rotate3d, RefreshCw } from "lucide-react";
import Image from "next/image";

// Map of icon names to components
const IconMap = {
  Home: Home,
  PaintBucket: PaintBucket,
  Rotate3d: Rotate3d,
  RefreshCw: RefreshCw,
};

export const ServiceCard = ({
  iconName,
  title,
  description,
  brandColor,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = IconMap[iconName] || Home;

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
      style={{ borderColor: brandColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex items-center mb-4">
          <div
            className="p-2 rounded-full mr-3"
            style={{ backgroundColor: `${brandColor}30` }}
          >
            <Icon size={24} stroke="#f0542d" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
