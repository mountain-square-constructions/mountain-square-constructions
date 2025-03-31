import SectionContainer from "./section-container";
import Box from "./box";
import Text from "./text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesOffered = () => {
  return (
    // <SectionContainer>
    //   <Box>
    //     <Text className="text-center">What we are offering</Text>
    //     <Text
    //       variant="h2"
    //       className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
    //     >
    //       {" "}
    //       OUR SERVICES
    //     </Text>

    //     <Box className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
    //       <Box className="relative">
    //         <Image
    //           src="/individualhouse.jpeg"
    //           alt="individualhouse"
    //           width={200}
    //           height={300}
    //           className="w-full h-auto"
    //         />
    //         <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
    //           {" "}
    //           Individual Housing
    //         </Text>
    //       </Box>
    //       <Box className="relative">
    //         <Image
    //           src="/residentialproject.avif"
    //           alt="residentialproject"
    //           width={200}
    //           height={200}
    //           className="w-full h-auto"
    //         />
    //         <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
    //           {" "}
    //           Interior Designing
    //         </Text>
    //       </Box>
    //       <Box className="relative">
    //         <Image
    //           src="/renovationhouse.avif"
    //           alt="renovationhouse"
    //           width={200}
    //           height={200}
    //           className="w-full h-auto"
    //         />
    //         <Text className="absolute bottom-5 p-5 font-bold text-white text-[20px] bg-[#f0542d]/50 inset-x-0 text-center mx-10">
    //           {" "}
    //           Renovation Of Houses
    //         </Text>
    //       </Box>
    //     </Box>
    //   </Box>
    // </SectionContainer>
    <SectionContainer>
      <Text
        variant="h2"
        className="text-[#f0542d] text-center md:text-[35px] lg:text-[35px] tracking-tight font-bold mb-10"
      >
        Be at Our Serve, We are the Best
      </Text>
      <Box className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-0 md:gap-x-20 items-center">
        <Box>
          <Image
            src="/Homepageservices.jpg"
            alt="qualitybuilding"
            width={400}
            height={300}
            className="w-full h-[300px] rounded-3xl"
          />
          <Button className="bg-[#f0542d] hover:bg-[#f0542d]/90 w-full mt-2 text-semibold text-[25px] text-white">
            <Link href="/services">Explore our Service</Link>
          </Button>
        </Box>
        <Box>
          <Text className="md:text-[23px] lg:text-[23px] font-bold text-[#f0542d] mb-5">
            Services, We are Offering
          </Text>
          <ul className="list-disc ml-7 space-y-1 text-[18px] font-medium">
            <li>We prepare all kind of design works for India& GCC</li>
            <li>Design and Development of concepts as per site condition</li>
            <li>Prepare Architectural, Interior and Detail drawings</li>
            <li>Prepare MEP & Landscape Drawings.</li>
            <li>
              Taking approval from the related authorities (depend up on site
              location)
            </li>
            <li>
              Supervising the construction until the building is ready to
              occupy(as per clients request).
            </li>
            <li>Prepare Buildup Drawings for Approval.</li>
            <li>
              Keep Client's relation and sincerely try to fulfill their dreams
              as much as we can.
            </li>
          </ul>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default ServicesOffered;
