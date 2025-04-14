import React from "react";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import Image from "next/image";
import {
  Hotel,
  House,
  HousePlus,
  MapPin,
  MapPinHouse,
  School,
  Warehouse,
} from "lucide-react";

export const metadata = {
  title: "Our Projects - Mountain Square Construction",
  description: `Explore our portfolio of successful residential, commercial, and industrial projects completed by Mountain Square Construction. See how we bring visions to life with quality craftsmanship.`,
  Keywords: [
    "Mountain Square Construction projects",
    "residential projects",
    "commercial construction",
    "industrial projects",
    "project portfolio",
    "building construction",
  ],
  openGraph: {
    title: "Our Projects - Mountain Square Construction",
    description:
      "Explore our portfolio of successful residential, commercial, and industrial projects completed by Mountain Square Construction. See how we bring visions to life with quality craftsmanship.",
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

const Projects = () => {
  const projectCategories = [
    {
      title: "Construction of Independent/Individual Houses",
      projects: [
        {
          id: 1,
          image: "/projects/projects1.jpg",
          location: "Hulimangala, Electronic City",
          status: "Completed",
        },
        {
          id: 2,
          image: "/projects/projects2.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed",
        },
        {
          id: 3,
          image: "/projects/projects3.jpg",
          location: "Electronic City, Bengaluru",
          status: "Completed",
        },
        {
          id: 4,
          image: "/projects/projects5.jpg",
          location: "BSR layout, jigani",
          status: "Completed",
        },
        {
          id: 5,
          image: "/projects/projects6.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Ongoing",
        },
        {
          id: 6,
          image: "/projects/projects7.jpg",
          location: "BSR layout, jigani",
          status: "Ongoing",
        },
        {
          id: 7,
          image: "/projects/projects4.jpg",
          location: "Electronic City, Bengaluru",
          status: "Completed",
        },
      ],
    },
    {
      title: "Interior Design and Execution",
      projects: [
        {
          id: 1,
          image: "/interior/interior1.jpg",
          location: "BSR Layout, Jigani, Bengaluru",
          status: "Completed",
        },
        {
          id: 2,
          image: "/interior/interior2.jpg",
          location: "Kanakpura Road, Thatagunni, Bengaluru",
          status: "Completed",
        },
        {
          id: 3,
          image: "/interior/interior3.jpg",
          location: "Royal Reed Layout, Electronic City",
          status: "Completed",
        },
        {
          id: 4,
          image: "/interior/interior4.jpg",
          location: "Kalluballu, Jigani, Bengaluru",
          status: "Completed",
        },
        {
          id: 5,
          image: "/interior/interior5.jpg",
          location: "Hulimangala, Bengaluru",
          status: "Completed",
        },
      ],
    },
    {
      title: "2D & 3D Architectural Planning",
      projects: [
        {
          id: 1,
          image: "/architecture/architecture1.jpg",
          location: "Kanakapura, Bengaluru",
          status: "Completed",
        },
        {
          id: 2,
          image: "/architecture/architecture2.jpg",
          location: "Royal regalia layout, Hulimangala, Electronic City",
          status: "Completed",
        },
        {
          id: 3,
          image: "/architecture/architecture3.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed/ongoing",
        },
        {
          id: 4,
          image: "/architecture/architecture4.jpg",
          location: "Jigani, Bengaluru",
          status: "Completed",
        },
        {
          id: 5,
          image: "/architecture/architecture5.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed/ongoing",
        },
        {
          id: 6,
          image: "/architecture/architecture6.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed/ongoing",
        },
        {
          id: 7,
          image: "/architecture/architecture7.jpg",
          location: "Jigani, Bengaluru",
          status: "Completed/ongoing",
        },
      ],
    },
    {
      title: "Renovation and Remodeling of Existing Buildings",
      projects: [
        {
          id: 1,
          image: "/renovation/renovation2.jpg",
          location: "Bommanahalli, Begur",
          status: "Ongoing",
        },
        {
          id: 2,
          image: "/renovation/renovation3.jpg",
          location: "Jigani, Bengaluru",
          status: "Ongoing",
        },
        {
          id: 3,
          image: "/renovation/renovation4.jpg",
          location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed",
        },
        {
          id: 4,
          image: "/renovation/renovation5.jpg",
          location: "Thoguru Cross, Electronic City",
          status: "Ongoing",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
        {/* Background Image */}
        <Image
          src="/projects.jpg"
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
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Projects
            </Text>
            <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Explore the Difference We’ve Made in Our Customers’ Lives.
            </Text>
          </SectionContainer>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box className="bg-[#ECECEB]">
        <SectionContainer className="py-16  ">
          <Box>
            <Box className="relative">
              <Text
                variant="h2"
                className="text-3xl font-bold mb-8 text-center text-[#e64a27] "
              >
                Explore Our Completed and Ongoing Projects in Bangalore
              </Text>
            </Box>
            <Box className="border-b-2 border-dotted my-10" />

            <Box>
              {projectCategories.map((category, index) => (
                <Box key={index} className="">
                  <Text
                    variant="h2"
                    className="text-2xl font-semibold text-[#e64a27] mb-6"
                  >
                    {category.title}
                  </Text>
                  <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.projects.map((project) => (
                      <Box
                        key={project.id}
                        className="group transition-all duration-300 hover:shadow-xl shadow-lg rounded-xl bg-white relative"
                      >
                        <Box className="overflow-hidden rounded-xl ">
                          <Image
                            src={project.image}
                            alt={`${category.title} project in ${project.location}`}
                            width={100}
                            height={100}
                            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Box>
                        <Image
                          src="/mountain-square-logo.png"
                          alt="logo"
                          width={50}
                          height={50}
                          priority
                          className="rounded-full absolute top-4 right-4"
                        />
                        <Box className="p-3 flex flex-col justify-between">
                          <Text className="mt-3 text-lg font-bold flex items-start gap-x-2">
                            {/* <MapPinHouse fill="#e64a27" stroke="#fff" /> */}
                            <span className="text-[#e64a27]">
                              Location:
                            </span>{" "}
                            {project.location}
                          </Text>
                          {category.title ===
                          "2D & 3D Architectural Planning" ? null : (
                            <Text className="text-lg font-medium flex items-center gap-x-2 mt-auto">
                              {/* <MapPin fill="#e64a27" stroke="#fff" /> */}
                              <span className="text-[#e64a27]">Status: </span>
                              {project.status}
                            </Text>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box className="border-b-2 border-dotted my-10" />
                </Box>
              ))}
            </Box>
          </Box>
        </SectionContainer>
      </Box>
    </>
  );
};

export default Projects;
