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
  Keywords: `Mountain Square Construction projects, residential projects, commercial construction, industrial projects, project portfolio, building construction`,
};

const Projects = () => {
  const projectCategories = [
    {
      title: "Construction of Independent/Individual Houses",
      projects: [
        {
          id: 1,
          image: "/slider1.jpg",
          location: "Lakeside Villa outside, Beverly Hills",
          status: "Completed",
        },
        {
          id: 2,
          image: "/slider3.jpg",
          location: "Modern Farmhouse, Napa Valley",
          status: "Completed/ongoing",
        },
        {
          id: 3,
          image: "/residentialproject.avif",
          location: "Contemporary Estate, Malibu",
          status: "Completed/ongoing",
        },
        {
          id: 4,
          image: "/individualhouse.jpeg",
          location: "Mediterranean Mansion, Santa Barbara",
          status: "Completed",
        },
      ],
    },
    {
      title: "Interior Design and Execution",
      projects: [
        {
          id: 1,
          image: "/budget.jpg",
          location: "Historic Townhouse, Boston",
          status: "Completed/ongoing",
        },
        {
          id: 2,
          image: "/standard.png",
          location: "Industrial Loft Conversion, Brooklyn",
          status: "Completed",
        },
        {
          id: 3,
          image: "/homepage-hero-img1.jpg",
          location: "Victorian Restoration, San Francisco",
          status: "Completed/ongoing",
        },
        {
          id: 4,
          image: "/renovationhouse.avif",
          location: "Commercial Building Revitalization, Portland",
          status: "Completed",
        },
      ],
    },
    {
      title: "2D & 3D Architectural Planning",
      projects: [
        {
          id: 1,
          image: "/slider2.jpg",
          location: "Luxury Penthouse, Downtown Manhattan",
          status: "Completed",
        },
        {
          id: 2,
          image: "/renovationhouse.avif",
          location: "Minimalist Apartment, Chicago",
          status: "Completed",
        },
        {
          id: 3,
          image: "/individualhouseprject3.jpeg",
          location: "Executive Office Suite, San Francisco",
          status: "Completed/ongoing",
        },
        {
          id: 4,
          image: "/individualhouseprject2.jpeg",
          location: "Boutique Hotel Lobby, Miami",
          status: "Completed",
        },
        {
          id: 5,
          image: "/bestquality.jpg",
          location: "Restaurant Redesign, Seattle",
          status: "Completed/ongoing",
        },
      ],
    },
    {
      title: "Renovation and Remodeling of Existing Buildings",
      projects: [
        {
          id: 1,
          image: "/budget.jpg",
          location: "Historic Townhouse, Boston",
          status: "Completed",
        },
        {
          id: 2,
          image: "/standard.png",
          location: "Industrial Loft Conversion, Brooklyn",
          status: "Completed/ongoing",
        },
        {
          id: 3,
          image: "/homepage-hero-img1.jpg",
          location: "Victorian Restoration, San Francisco",
          status: "Completed",
        },
        {
          id: 4,
          image: "/renovationhouse.avif",
          location: "Commercial Building Revitalization, Portland",
          status: "Completed/ongoing",
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
          src="/slider3.jpg"
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
      <SectionContainer className="py-16">
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
                      className="group transition-all duration-300 hover:shadow-xl shadow-lg rounded-xl"
                    >
                      <Box className="overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt={`${category.title} project in ${project.location}`}
                          width={100}
                          height={100}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Box>
                      <Box className="p-3 flex flex-col">
                        <Text className="mt-3 text-lg font-bold flex items-start gap-x-2">
                          {/* <MapPinHouse fill="#e64a27" stroke="#fff" /> */}
                          <span className="text-[#e64a27]">Location:</span>{" "}
                          {project.location}
                        </Text>
                        <Text className="text-lg font-medium flex items-center gap-x-2 mt-auto">
                          {/* <MapPin fill="#e64a27" stroke="#fff" /> */}
                          <span className="text-[#e64a27]">Status: </span>
                          {project.status}
                        </Text>
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
    </>
  );
};

export default Projects;
