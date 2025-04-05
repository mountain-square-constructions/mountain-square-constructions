import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { CircleCheck } from "lucide-react";

const Thankyou = () => {
  return (
    <SectionContainer>
      <Box className="flex items-center justify-center h-100vh w-full">
        <Box className="flex flex-col space-y-3 text-center">
          <Box className="mx-auto">
            {" "}
            <CircleCheck fill="#e64a27" size="100" stroke="#fff" />
          </Box>
          <Text variant="h2"> Thank You for Submitting Your Details!</Text>
          <Text>
            One of our agent will be in touch with you shortly to discuss your
            project.
          </Text>
          <Text>We look forward to helping you build your vision!</Text>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Thankyou;
