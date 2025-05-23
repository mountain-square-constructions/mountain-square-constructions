// import Image from "next/image";
// import { Server, Database, Network } from "lucide-react";
// import SectionContainer from "./section-container";
// import Box from "./box";
// import Text from "./text";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const Projects = () => {
//   return (
//     <Box className="bg-lightbackground/50">
//       <SectionContainer>
//         <Box>
//           <Text
//             variant="h2"
//             className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
//           >
//             {" "}
//             OUR COMPLETED PROJECTS
//           </Text>
//           <Box className="grid grid-cols-1 md:grid-cols-3 md:gap-10 ">
//             <Box className=" shadow-lg rounded-lg bg-background">
//               <Image
//                 src="/individualhouseprject1.jpeg"
//                 alt="individualhouseprject1"
//                 width={200}
//                 height={300}
//                 className="w-full h-auto rounded-t-lg"
//               />
//               <Text className="font-semibold text-[20px] p-3">
//                 Verner's House, Jayanagar, Bangalore
//               </Text>
//             </Box>
//             <Box className=" shadow-lg rounded-lg bg-background">
//               <Image
//                 src="/individualhouseprject2.jpeg"
//                 alt="individualhouseprject2"
//                 width={200}
//                 height={300}
//                 className="w-full h-auto rounded-t-lg"
//               />
//               <Text className="font-semibold text-[20px] p-3">
//                 Allen poper's House, Jayanagar, Bangalore
//               </Text>
//             </Box>
//             <Box className=" shadow-lg rounded-lg bg-background">
//               <Image
//                 src="/individualhouseprject3.jpeg"
//                 alt="individualhouseprject3"
//                 width={200}
//                 height={300}
//                 className="w-full h-auto rounded-t-lg"
//               />
//               <Text className="font-semibold text-[20px] p-3">
//                 Rajesh House, Jayanagar, Bangalore
//               </Text>
//             </Box>
//           </Box>
//           <Button>
//             {" "}
//             <Link href="/projects">Explore Projects</Link>
//           </Button>
//         </Box>
//       </SectionContainer>
//     </Box>
//   );
// };

// export default Projects;

import Image from "next/image";
import { Server, Database, Network } from "lucide-react";
import SectionContainer from "./section-container";
import Box from "./box";
import Text from "./text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <Box className="bg-[#833ab4]/20">
      <SectionContainer className="py-6 md:py-12">
        <Box className="flex flex-col items-center">
          <Text
            variant="h2"
            className="text-center text-[30px] md:text-[35px] lg:text-[35px] font-bold mb-12 text-[#f0542d]"
          >
            Our Completed Projects
          </Text>

          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {/* Project Card 1 */}
            <Box className="shadow-lg rounded-lg bg-background overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative w-full h-96">
                <Image
                  src="/projects/projects1.jpg"
                  alt="Verner's House, Jayanagar, Bangalore"
                  fill
                  className="object-cover"
                />
              </div>
              <Box className="p-3 flex flex-col">
                <Text className="mt-3 text-lg font-bold flex items-start gap-x-2">
                  {/* <MapPinHouse fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Location:</span> Hulimangala,
                  Electronic City
                </Text>
                <Text className="text-lg font-medium flex items-center gap-x-2 mt-auto">
                  {/* <MapPin fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Status: </span>
                  Completed
                </Text>
              </Box>
            </Box>

            {/* Project Card 2 */}
            <Box className="shadow-lg rounded-lg bg-background overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative w-full h-96">
                <Image
                  src="/projects/projects2.jpg"
                  alt="Allen poper's House, Jayanagar, Bangalore"
                  fill
                  className="object-cover"
                />
              </div>
              <Box className="p-3 flex flex-col">
                <Text className="mt-3 text-lg font-bold flex items-start gap-x-2">
                  {/* <MapPinHouse fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Location:</span> Royal reed
                  layout, Podu, Hulimangala, Electronic City
                </Text>
                <Text className="text-lg font-medium flex items-center gap-x-2 mt-auto">
                  {/* <MapPin fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Status: </span>
                  Completed
                </Text>
              </Box>
            </Box>

            {/* Project Card 3 */}
            <Box className="shadow-lg rounded-lg bg-background overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative w-full h-96">
                <Image
                  src="/projects/projects3.jpg"
                  alt="Rajesh House, Jayanagar, Bangalore"
                  fill
                  className="object-cover"
                />
              </div>
              <Box className="p-3 flex flex-col">
                <Text className="mt-3 text-lg font-bold flex items-start gap-x-2">
                  {/* <MapPinHouse fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Location:</span> Royal reed
                  layout, Podu, Hulimangala, Electronic City
                </Text>
                <Text className="text-lg font-medium flex items-center gap-x-2 mt-auto">
                  {/* <MapPin fill="#e64a27" stroke="#fff" /> */}
                  <span className="text-[#e64a27]">Status: </span>
                  Completed
                </Text>
              </Box>
            </Box>
          </Box>

          <Button className="bg-[#f0542d] hover:bg-[#f0542d]/90 text-white text-[20px] py-6 px-8 font-medium rounded-lg">
            <Link href="/projects" className="flex items-center">
              Explore Projects
            </Link>
          </Button>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
