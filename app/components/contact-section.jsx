import React from "react";
import SectionContainer from "./section-container";
import ContactForm from "./contact-form";
import Box from "./box";
import Image from "next/image";
import Text from "./text";

const ContactSection = () => {
  return (
    <SectionContainer className="p-0 mx-auto">
      <Box className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100 p-5 rounded-xl mx-auto shadow-lg mt-10">
        <Box>
          <Text className="!text-[30px] font-bold font-nunito text-center mb-10">
            Let Build Tommorrow Today!
          </Text>
          <Box className="flex items-center justify-center">
            <Image
              src="/contactus.jpg"
              alt="contact"
              width={300}
              height={300}
              className="w-[500px] h-[500px]"
            />
          </Box>
        </Box>

        <ContactForm />
      </Box>
    </SectionContainer>
  );
};

export default ContactSection;
