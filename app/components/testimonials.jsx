import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Box from "./box";
import StarRating from "./rating-review";
import SectionContainer from "./section-container";
import Text from "./text";
import { Card, CardContent } from "@/components/ui/card";

const testimonialData = [
  {
    id: 1,
    title: "Best Construction Service",
    rating: 4.5,
    description:
      "The team was always responsive and kept us informed throughout the project. They were easy to communicate with and always willing to answer our questions.",
    author: "Jenisson",
    role: "Senior Project Manager",
    image: "/testimonial.png",
  },
  {
    id: 2,
    title: "Quality no 1",
    rating: 5,
    description:
      "The team was always responsive and kept us informed throughout the project. They were easy to communicate with and always willing to answer our questions.",
    author: "Tom Harris",
    role: "Head of Project Management",
    image: "/testimonial.png",
  },
  {
    id: 3,
    title: "Best Renovation I Got",
    rating: 4.0,
    description:
      "The team was always responsive and kept us informed throughout the project. They were easy to communicate with and always willing to answer our questions.",
    author: "Emily Brown",
    role: "Project Manager",
    image: "/testimonial.png",
  },
  {
    id: 4,
    title: "Extremely happy the way you built!",
    rating: 5,
    description:
      "The team was always responsive and kept us informed throughout the project. They were easy to communicate with and always willing to answer our questions.",
    author: "Jenisson",
    role: "Project Director",
    image: "/testimonial.png",
  },
];

const Testimonials = () => {
  return (
    <Box className="bg-whitefadebackground">
      <SectionContainer className="pb-0">
        <Box className="p-0 relative">
          <Text variant="h2">Hear from Our Customers</Text>
          <Carousel
            className=""
            opts={{
              align: "start",
              loop: true,
              slidesPerView: 3,
              slidesPerGroup: 1,
            }}
          >
            <CarouselContent className="py-5">
              {testimonialData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="inline-flex items-stretch sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <Card
                    className={`p-5 object-center grid place-items-stretch shadow-md hover:shadow-lg dark:bg-detailcontrast rounded-[32px]`}
                  >
                    <CardContent className="p-0 px-3">
                      {/* <Image
                        src="/testimonialquote.svg"
                        alt="testimonial Quote"
                        width={15}
                        height={15}
                      /> */}
                      <Text className="font-bold mt-4">{item.title}</Text>
                      <Box className="flex justify-start mt-2 mb-5">
                        <StarRating rating={item.rating} />
                      </Box>
                      <Text className="text-lightforeground">
                        {item.description}
                      </Text>
                      <Box className=" border-t border-dotted my-3 mt-6" />
                      <Box className="flex items-center gap-x-5 ">
                        <Image
                          src={item.image}
                          alt="testimonial"
                          width={40}
                          height={40}
                          loading="lazy"
                        />

                        <Box className="flex flex-col">
                          <Text className="font-semibold">{item.author}</Text>
                          <Text className="text-[12px] font-normal text-lightforeground">
                            {item.role}
                          </Text>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Position arrows at the top right corner */}
            <Box className="absolute xs:top-[105%] xs:right-[40%] sm:-top-5 sm:right-0 flex gap-x-5">
              <CarouselPrevious className="relative left-0 bg-[#f0542d] hover:bg-[#f0542d]/90 text-white hover:text-white" />
              <CarouselNext className="relative right-0 bg-[#f0542d] hover:bg-[#f0542d]/90 text-white hover:text-white" />
            </Box>
          </Carousel>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Testimonials;
