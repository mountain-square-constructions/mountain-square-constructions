import Image from "next/image";
import { Server, Database, Network } from "lucide-react";
import SectionContainer from "./section-container";
import Box from "./box";
import Text from "./text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <Box className="bg-lightbackground/50">
      <SectionContainer>
        <Box>
          <Text
            variant="h2"
            className="text-center md:text-[35px] lg:text-[35px] tracking-wider font-bold mb-10"
          >
            {" "}
            OUR COMPLETED PROJECTS
          </Text>
          <Box className="grid grid-cols-1 md:grid-cols-3 md:gap-10 ">
            <Box className=" shadow-lg rounded-lg bg-background">
              <Image
                src="/individualhouseprject1.jpeg"
                alt="individualhouseprject1"
                width={200}
                height={300}
                className="w-full h-auto rounded-t-lg"
              />
              <Text className="font-semibold text-[20px] p-3">
                Verner's House, Jayanagar, Bangalore
              </Text>
            </Box>
            <Box className=" shadow-lg rounded-lg bg-background">
              <Image
                src="/individualhouseprject2.jpeg"
                alt="individualhouseprject2"
                width={200}
                height={300}
                className="w-full h-auto rounded-t-lg"
              />
              <Text className="font-semibold text-[20px] p-3">
                Allen poper's House, Jayanagar, Bangalore
              </Text>
            </Box>
            <Box className=" shadow-lg rounded-lg bg-background">
              <Image
                src="/individualhouseprject3.jpeg"
                alt="individualhouseprject3"
                width={200}
                height={300}
                className="w-full h-auto rounded-t-lg"
              />
              <Text className="font-semibold text-[20px] p-3">
                Rajesh House, Jayanagar, Bangalore
              </Text>
            </Box>
          </Box>
          <Button>
            {" "}
            <Link href="/projects">Explore Projects</Link>
          </Button>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
