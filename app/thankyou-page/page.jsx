import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const Thankyou = () => {
  return (
    <SectionContainer>
      <Box className="flex items-center justify-center h-100vh w-full">
        <Box className="flex flex-col space-y-3 text-center">
          <Box className="mx-auto">
            {" "}
            <CircleCheck fill="#e64a27" size="100" stroke="#fff" />
          </Box>
          <Text variant="h2"> Thankyou for Submitting </Text>
          <Text>You have successfully submitted the data</Text>
          <Text>Soon, We will get back to you</Text>
          <Link href="/" className="text-blue-500 underline font-semibold">
            {" "}
            Go Back to Homepage
          </Link>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Thankyou;
