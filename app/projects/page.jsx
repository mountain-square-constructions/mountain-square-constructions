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

const Projects = () => {
  const projectCategories = [
    {
      title: "Individual Houses Construction",
      projects: [
        {
          id: 1,
          image: "/slider1.jpg",
          location: "Lakeside Villa outside",
          pin: "Beverly Hills",
        },
        {
          id: 2,
          image: "/slider3.jpg",
          location: "Modern Farmhouse Farmhouse,",
          pin: "Napa Valley",
        },
        {
          id: 3,
          image: "/residentialproject.avif",
          location: "Contemporary Estate Estate",
          pin: "Malibu",
        },
        {
          id: 4,
          image: "/individualhouse.jpeg",
          location: "Mediterranean Mansion Mansion",
          pin: "Santa Barbara",
        },
      ],
    },
    {
      title: "Interior Designing",
      projects: [
        {
          id: 1,
          image: "/slider2.jpg",
          location: "Luxury Penthouse Penthouse",
          pin: "Downtown Manhattan",
        },
        {
          id: 2,
          image: "/renovationhouse.avif",
          location: "Minimalist Apartment Apartment",
          pin: "Chicago",
        },
        {
          id: 3,
          image: "/individualhouseprject3.jpeg",
          location: "Executive Office Suite",
          pin: "San Francisco",
        },
        {
          id: 4,
          image: "/individualhouseprject2.jpeg",
          location: "Boutique Hotel Lobby",
          pin: "Miami",
        },
        {
          id: 5,
          image: "/bestquality.jpg",
          location: "Restaurant Redesign",
          pin: "Seattle",
        },
      ],
    },
    {
      title: "Renovation of Buildings",
      projects: [
        {
          id: 1,
          image: "/budget.jpg",
          location: "Historic Townhouse Townhouse",
          pin: "Boston",
        },
        {
          id: 2,
          image: "/standard.png",
          location: "Industrial Loft Conversion",
          pin: "Brooklyn",
        },
        {
          id: 3,
          image: "/homepage-hero-img1.jpg",
          location: "Victorian Restoration",
          pin: "San Francisco",
        },
        {
          id: 4,
          image: "/renovationhouse.avif",
          location: "Commercial Building Revitalization",
          pin: "Portland",
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
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider"
            >
              Our Projects
            </Text>
            <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Discover our portfolio of exceptional construction projects that
              showcase our commitment to quality, innovation, and excellence
            </Text>
          </SectionContainer>
        </Box>
      </Box>

      {/* Main Content Section */}
      <SectionContainer className="py-16">
        <Box>
          <Text
            variant="h2"
            className="text-3xl font-bold mb-8 text-center text-[#e64a27]"
          >
            Featured Projects
          </Text>
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
                      <Box className="p-3">
                        <Text className="mt-3 text-lg font-bold flex items-center gap-x-2">
                          <MapPinHouse fill="#e64a27" stroke="#fff" />
                          {project.location}
                        </Text>
                        <Text className="mt-3 text-lg font-bold flex items-center gap-x-2">
                          <MapPin fill="#e64a27" stroke="#fff" />
                          {project.pin}
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
