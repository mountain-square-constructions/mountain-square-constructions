import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Image from "next/image";
import Text from "../components/text";
import ContactForm from "../components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Box className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
        {/* Background Image */}
        <Image
          src="/contact.jpeg"
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
              variant="h1"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider"
            >
              Reach New Heights with Us – Connect Today!
            </Text>
            <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Let’s turn your vision into reality, one strong foundation at a
              time. We're here to listen, collaborate, and build your future
              together.
            </Text>
          </SectionContainer>
        </Box>
      </Box>

      <SectionContainer>
        <Box className="grid md:grid-cols-12 gapx-10">
          <Box className="md:col-span-5 pr-11">
            <Text variant="h2" className="text-[#e64a27] mb-5">
              Visit us to explore our projects.
            </Text>
            <Box className="flex items-start gap-x-8 mb-10">
              <MapPin size={80} fill="#e64a27" stroke="#fff" />
              <Box>
                <Text className="text-[25px] font-semibold mb-1">Address</Text>
                <Text>
                  Sy no 1 Rama Reddy building Hulimangala panchayat Jigani hobli
                  Anekal taluk Bangalore 560100
                </Text>
              </Box>
            </Box>
            <Box className="flex items-start gap-x-8 mb-10">
              <Phone size={50} fill="#e64a27" stroke="#fff" />
              <Box>
                <Text className="text-[25px] font-semibold mb-1">
                  Phone Number{" "}
                </Text>
                <Text>+91 90597 45631</Text>
                <Text>+91 80744 81787</Text>
              </Box>
            </Box>
            <Box className="flex items-start gap-x-8">
              <Mail size={50} fill="#e64a27" stroke="#fff" />
              <Box>
                <Text className="text-[25px] font-semibold mb-1">Email</Text>
                <Text>
                  <Link href="mailto:contact@mountainsquareconstruction.com">
                    {" "}
                    contact@mountainsquareconstruction.com
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="md:col-span-7">
            <Text variant="h2" className="text-[#e64a27] mb-5">
              Get Started Today
            </Text>
            <ContactForm />
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
};

export default Contact;
