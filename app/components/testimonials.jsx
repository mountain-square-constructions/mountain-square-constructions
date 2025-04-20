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
    rating: 5,
    description:
      "Mountain Square Construction is the best construction company in Bangalore. Highly recommended for anyone looking to turn their dream project into reality.",
    author: "Mallikharjuna Rao",
    role: "Electronic City, Bengaluru",
    image: "/testimonial.png",
  },
  {
    id: 2,
    title: "No 1 Quality House, I Got",
    rating: 5,
    description: `
I recently moved into my newly constructed home. The design and layout are exactly what I was looking for—modern, functional, and spacious. The finishes and materials used are of good quality, and the attention to detail is noticeable throughout the house.
`,
    author: "Nazama Shirur",
    role: "Humlimangala, Bengaluru",
    image: "/testimonial.png",
  },
  {
    id: 3,
    title: "Best Quality Construction Service",
    rating: 5,
    description:
      "Extremely satisfied with Mountain Square Construction's work on our home in Hulimangala!. The team was responsive throughout the project. Everything from foundation to finishing touches was done perfectly!",
    author: "Prasanth",
    role: "Jayanagar, Bengaluru",
    image: "/testimonial.png",
  },
  {
    id: 4,
    title: "Excellent Service from Start to Finish",
    rating: 5,
    description:
      "Had a fantastic experience with MS Construction—professional, organized, and friendly. They kept us informed and made the whole process smooth and stress-free.",
    author: "Shaik Afzal Ahammad",
    role: "Electronic City, Bengaluru",
    image: "/testimonial.png",
  },
  {
    id: 5,
    title: "Stress-Free Construction with Great Value",
    rating: 5,
    description:
      "Needed a builder for my 1500 sq ft G+2. Saw 3 of their sites, got good feedback. Work done on time with great quality. Professional team. Stress-free and worth the price.",
    author: "shaik zuber",
    role: "Electronic City, Bengaluru",
    image: "/testimonial.png",
  },
  {
    id: 6,
    title: "Respectfull and Understanding Team ",
    rating: 6,
    description:
      "The team working on my site has been great so far—very good and friendly people! They’ve been easy to communicate with and respectful throughout the process. The construction is still ongoing, but my experience up to this point has been really positive. Looking forward to seeing the final result!",
    author: "RajShekar Reddy Nr",
    role: "Electronic City, Bengaluru",
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
                    <CardContent className="p-0 px-3 flex flex-col">
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
                      <Box className=" border-t border-dotted my-3 mt-auto" />
                      <Box className="flex items-center gap-x-5 mt-auto">
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
            <Box className="absolute top-[105%] right-[40%] sm:-top-5 sm:right-0 ">
              <Box className="flex gap-x-5">
                <CarouselPrevious className="relative left-0 bg-[#f0542d] hover:bg-[#f0542d]/90 text-white hover:text-white" />
                <CarouselNext className="relative right-0 bg-[#f0542d] hover:bg-[#f0542d]/90 text-white hover:text-white" />
              </Box>
            </Box>
          </Carousel>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Testimonials;
