import SectionContainer from "./section-container";
import Box from "./box";
import Text from "./text";
import Image from "next/image";

const ServicesOffered = () => {
  return (
    <SectionContainer>
      <Box>
        <Text className="text-center">What we are offering</Text>
        <Text
          variant="h2"
          className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
        >
          {" "}
          OUR SERVICES
        </Text>

        <Box className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          <Box className="relative">
            <Image
              src="/individualhouse.jpeg"
              alt="individualhouse"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
              {" "}
              Individual Housing
            </Text>
          </Box>
          <Box className="relative">
            <Image
              src="/residentialproject.avif"
              alt="residentialproject"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
              {" "}
              Interior Designing
            </Text>
          </Box>
          <Box className="relative">
            <Image
              src="/renovationhouse.avif"
              alt="renovationhouse"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
              {" "}
              Renovation Of Houses
            </Text>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default ServicesOffered;
