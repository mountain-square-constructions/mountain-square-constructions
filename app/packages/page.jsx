import React from "react";
import SectionContainer from "../components/section-container";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Construction Pricing & Packages | Mountain Square Construction",
  description:
    "Mountain Square is a construction company in bengaluru doing house construction, building construction, & commercial construction. House construction packages start at Rs 1599/Sq.Ft",

  keywords: [
    "construction pricing",
    "construction packages",
    "home construction cost per sq ft",
    "residential construction packages",
    "commercial construction pricing",
    "affordable construction services",
    "Mountain Square Construction pricing",
    "building cost per square foot",
  ],

  openGraph: {
    title: "Affordable Construction Packages | Mountain Square Construction",
    description:
      "Mountain Square is a construction company in bengaluru doing house construction, building construction, & commercial construction. House construction packages start at Rs 1599/Sq.Ft",
    url: "https://mountainsquareconstruction.com/",
    siteName: "Mountain Square Construction",
    images: [
      {
        url: "https://mountainsquareconstruction.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const packages = [
  {
    name: "Basic",
    price: "₹1,799",
    badge: "/bronze.png",
    features: ["Basic Design", "Standard Materials", "Basic Support"],
  },
  {
    name: "Silver",
    price: "₹1,899",
    badge: "/silverbadge.png",
    features: ["Premium Design", "Better Materials", "Priority Support"],
  },
  {
    name: "Gold",
    price: "2,099",
    badge: "/goldbadge.png",
    features: ["Luxury Finish", "High-Quality Materials", "24/7 Support"],
  },
  {
    name: "Platinum",
    price: "₹2,299",
    badge: "/Platinum-Medal.png",
    features: [
      "Ultra Luxury Finish",
      "Top-Grade Materials",
      "Dedicated Manager",
    ],
  },
];

const Packages = () => {
  return (
    <div className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/70 to-[#833ab4]">
      <SectionContainer>
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Packages
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-[#f0542d] text-white rounded-xl shadow-lg p-8 flex flex-col justify-between hover:scale-105 transition duration-300"
              >
                {/* 🔥 Badge Image (Only for Silver & Gold) */}
                {pkg.badge && (
                  <div className="absolute -top-6 -right-6">
                    <Image
                      src={pkg.badge}
                      alt={`${pkg.name} badge`}
                      width={80}
                      height={80}
                      className="drop-shadow-xl"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {pkg.name} Package
                  </h3>

                  <p className="text-3xl font-bold mb-6">
                    {pkg.price} <span className="text-lg">/Sq.Ft.</span>
                  </p>

                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact-us" className="w-full">
                  <button className="w-full bg-white text-[#f0542d] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
                    Enquire Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Packages;
