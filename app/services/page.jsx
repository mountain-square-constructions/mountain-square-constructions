import SectionContainer from "../components/section-container";
import Text from "../components/text";
import Box from "../components/box";
import Image from "next/image";
import { ServiceCard } from "./servicecard";

export const metadata = {
  title: "Our Services - Mountain Square Construction.",
  description: `Discover the range of construction services offered by Mountain Square Construction. From residential homes to large-scale commercial and industrial projects, we build with precision and care.`,
  Keywords: `Mountain Square Construction services, residential construction services, commercial construction, industrial building services, construction expertise, quality construction services.`,
};

const Services = () => {
  const services = [
    {
      iconName: "Home", // String instead of component reference
      title: "Construction of Independent/Individual Houses",
      description:
        "We specialize in crafting custom homes that perfectly reflect your unique style and needs. From the foundation to the final touches, we ensure exceptional quality and attention to detail, transforming your vision into a dream home that stands the test of time.",
      img: "/individualhouse.jpg",
    },
    {
      iconName: "PaintBucket", // String instead of component reference
      title: "Interior Design and Execution",
      description:
        "Our team of expert designers creates spaces that are both functional and visually stunning. Tailored to suit your lifestyle, we manage every aspect of the design and execution process to bring your vision to life with elegance and precision.",
      img: "/interior.jpg",
    },
    {
      iconName: "Rotate3d", // String instead of component reference
      title: "2D & 3D Architectural Planning",
      description:
        "We offer detailed 2D and 3D architectural plans that provide a clear, accurate representation of your project. Combining creativity and technical expertise, we ensure a seamless transition from concept to construction, guiding you through each stage with precision.",
      img: "/slider2.jpg",
    },
    {
      iconName: "RefreshCw", // String instead of component reference
      title: "Renovation and Remodeling of Existing Buildings",
      description:
        "Breathe new life into your existing spaces with our expert renovation and remodeling services. Whether enhancing interiors or updating structural elements, we help modernize and refresh your building while maintaining its character and integrity.",
      img: "/renovationofhouse.jpg",
    },
  ];

  return (
    <>
      <Box className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px]">
        {/* Background Image */}
        <Image
          src="/services.jpeg"
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
              variant="h2"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Services
            </Text>
            <Text className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Explore our wide range of construction services, from custom homes
              to expert renovations, all designed to exceed your expectations.
            </Text>
          </SectionContainer>
        </Box>
      </Box>
      <SectionContainer className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconName={service.iconName} // Pass iconName instead of icon
              title={service.title}
              image={service.img}
              description={service.description}
              brandColor={service.brandColor}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default Services;
