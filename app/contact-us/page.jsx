import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Image from "next/image";
import Text from "../components/text";
import ContactForm from "../components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import PhoneButton from "../components/phonebutton";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Mountain Square Construction",
  description: `Get in touch with Mountain Square Construction for all your residential, commercial, and industrial project inquiries. We’re ready to help you build your future.`,
  Keywords: `Contact Mountain Square Construction, get in touch with Mountain Square, contact construction experts, construction project inquiries`,
};

const Contact = () => {
  return (
    <>
      <Box className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
        {/* Background Image */}
        <Image
          src="/handshake.avif"
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
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 "
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
        <Box className="md:grid md:grid-cols-12 md:gapx-10">
          <Box className="md:col-span-5 pr-11">
            <Text variant="h2" className="text-[#e64a27] mb-5">
              Visit us to explore our projects.
            </Text>
            <Box className="flex items-start gap-x-8 ">
              <MapPin
                size={80}
                fill="#e64a27"
                stroke="#fff"
                className="w-11 h-11 xl:w-16 xl:h-16"
              />
              <Box>
                <Text className="text-[25px] font-semibold mb-1">Address</Text>
                <Text>
                  Sy no 1, Rama Reddy building,Hulimangala Gram panchayath -
                  RJ9P+GQC, Karnataka 560105
                </Text>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-muted-foreground rounded-md hover:bg-transparent/10 h-12 md:h-10 mb-10"
                >
                  <Link
                    className="!font-semibold text-[18px] text-[#e64a27] whitespace-break-spaces"
                    href="https://maps.app.goo.gl/icuipqdJVKawJaVH7?g_st=aw"
                    target="blank"
                  >
                    Click here to view on Google Maps
                  </Link>
                </Button>
              </Box>
            </Box>

            {/* Using the client component for phone button */}
            <PhoneButton phoneNumber="+91 83109 85053">
              +91 83109 85053
            </PhoneButton>
            <Box className="flex items-start gap-x-8">
              <Mail
                size={80}
                fill="#e64a27"
                stroke="#fff"
                className="w-11 h-11 xl:w-12 xl:h-12"
              />
              <Box>
                <Text className="text-[25px] font-semibold mb-1">Email</Text>
                <Text>
                  <Link href="mailto:contact@mountainsquareconstruction.com">
                    {" "}
                    contact@mountainsquarec onstruction.com
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className=" md:col-span-7">
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
// onClick={() => handleClick("+91 83109 85053")}
