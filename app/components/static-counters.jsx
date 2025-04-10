// import React from "react";
// import Image from "next/image";
// import { Building, CalendarDays, Rocket, UserRound } from "lucide-react";
// import SectionContainer from "./section-container";
// import Text from "./text";
// import Box from "./box";

// const StaticCounters = () => {
//   const stats = [
//     {
//       icon: CalendarDays,
//       value: "25+",
//       label: "Years Experience",
//     },
//     {
//       icon: Building,
//       value: "180+",
//       label: "Projects Completed",
//     },
//     {
//       icon: UserRound,
//       value: "500+",
//       label: "Happy Clients",
//     },
//     {
//       icon: Rocket,
//       value: "99%",
//       label: "Success Rate",
//     },
//     {
//       icon: UserRound,
//       value: "140+",
//       label: "Achievements",
//     },
//   ];
//   return (
//     <Box className="bg-[#f5f5f5]">
//       <Box className="bg-[#833ab4]/20 py-12">
//         <SectionContainer className="py-0">
//           <Box className="w-full flex flex-col items-center">
//             <Text
//               variant="h2"
//               className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold mb-2"
//             >
//               Mountain Square Construction Pvt Ltd
//             </Text>
//             <Text className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text md:text-[23px] lg:text-[23px] font-bold mb-5">
//               We are the Best Construction Company In Bangalore
//             </Text>
//           </Box>
//           <Box className="mx-auto px-4">
//             <Box className="bg-white shadow-xl py-8 px-6 md:px-10 lg:px-16 rounded-2xl xl:rounded-[30px]">
//               <Box className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-3">
//                 {/* Left side with logo and experience */}
//                 <Box className="md:col-span-4 flex flex-col items-center md:items-start justify-center space-y-6">
//                   <Box className="relative w-48 h-48">
//                     <Image
//                       src="/mountain-square-logo.png"
//                       alt="Mountain Square Construction"
//                       fill
//                       className="object-contain rounded-full shadow-xl"
//                     />
//                   </Box>
//                   <Box className="flex flex-col items-center md:items-start justify-center">
//                     <Text className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-[60px] md:text-[70px] lg:text-[80px] font-extrabold leading-none">
//                       {stats[0].value}
//                     </Text>
//                     <Text className=" bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-[24px] md:text-[28px] font-bold leading-none">
//                       {stats[0].label}
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right side with other stats */}
//                 <Box className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
//                   {stats.slice(1).map((stat, index) => (
//                     <Box
//                       key={index}
//                       className="flex flex-col items-center justify-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 border text-center bg-[#f7fcfe]/70 border-[#f0542d] shadow-md"
//                     >
//                       <Box className="flex items-center justify-center gap-x-3 mb-2">
//                         <stat.icon
//                           fill="#f0542d"
//                           size={38}
//                           className="flex-shrink-0"
//                           stroke="#fff"
//                         />
//                         <Text className="text-[36px] sm:text-[44px] font-bold text-[#f0542d] leading-tight">
//                           {stat.value}
//                         </Text>
//                       </Box>
//                       <Text className="text-[20px] sm:text-[24px] font-medium text-center">
//                         {stat.label}
//                       </Text>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </SectionContainer>
//       </Box>
//     </Box>
//   );
// };

// export default StaticCounters;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Building, CalendarDays, Rocket, UserRound } from "lucide-react";
import SectionContainer from "./section-container";
import Text from "./text";
import Box from "./box";

const AnimatedCounter = ({ value, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const startValueRef = useRef(0);
  const endValueRef = useRef(parseFloat(value.replace(/[^0-9.]/g, "")));
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const suffix = value.replace(/[0-9.]/g, "");

  const animateValue = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const progress = timestamp - startTimeRef.current;

    if (progress < duration) {
      const rawValue =
        startValueRef.current +
        (endValueRef.current - startValueRef.current) * (progress / duration);
      setCount(Math.floor(rawValue));
      frameRef.current = requestAnimationFrame(animateValue);
    } else {
      setCount(endValueRef.current);
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
          }
          startTimeRef.current = null;
          frameRef.current = requestAnimationFrame(animateValue);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <span ref={countRef} className={className}>
      {count}
      {suffix}
    </span>
  );
};

const CountUp = () => {
  const stats = [
    {
      icon: CalendarDays,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: Building,
      value: "180+",
      label: "Projects Completed",
    },
    {
      icon: UserRound,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: Rocket,
      value: "99%",
      label: "Success Rate",
    },
    {
      icon: UserRound,
      value: "140+",
      label: "Achievements",
    },
  ];

  return (
    <Box className="bg-[#f5f5f5]">
      <Box className="bg-[#833ab4]/20 py-12">
        <SectionContainer className="py-0">
          <Box className="w-full flex flex-col items-center">
            {/* <Text
              variant="h2"
              className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold mb-2"
            >
              Mountain Square Construction Pvt Ltd
            </Text>
            <Text className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text md:text-[23px] lg:text-[23px] font-bold mb-5">
              We are the Best Construction Company In Bangalore
            </Text> */}
          </Box>
          <Box className="mx-auto px-4">
            <Box className="bg-white shadow-xl py-8 px-6 md:px-10 lg:px-16 rounded-2xl xl:rounded-[30px]">
              <Box className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-3">
                {/* Left side with logo and experience */}
                <Box className="md:col-span-4 flex flex-col items-center md:items-start justify-center space-y-6">
                  <Box className="relative w-48 h-48">
                    <Image
                      src="/mountain-square-logo.png"
                      alt="Mountain Square Construction"
                      fill
                      className="object-contain rounded-full shadow-xl"
                    />
                  </Box>
                  <Box className="flex flex-col items-center md:items-start justify-center">
                    <Text className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-[60px] md:text-[70px] lg:text-[80px] font-extrabold leading-none">
                      <AnimatedCounter
                        value={stats[0].value}
                        className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text"
                      />
                    </Text>
                    <Text className="bg-gradient-to-br from-[#833ab4] via-[#d9420f]/80 to-[#833ab4] inline-block text-transparent bg-clip-text text-[24px] md:text-[28px] font-bold leading-none">
                      {stats[0].label}
                    </Text>
                  </Box>
                </Box>

                {/* Right side with other stats */}
                <Box className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {stats.slice(1).map((stat, index) => (
                    <Box
                      key={index}
                      className="flex flex-col items-center justify-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 border text-center bg-[#f7fcfe]/70 border-[#f0542d] shadow-md"
                    >
                      <Box className="flex items-center justify-center gap-x-3 mb-2">
                        <stat.icon
                          fill="#f0542d"
                          size={38}
                          className="flex-shrink-0"
                          stroke="#fff"
                        />
                        <Text className="text-[36px] sm:text-[44px] font-bold text-[#f0542d] leading-tight">
                          <AnimatedCounter value={stat.value} />
                        </Text>
                      </Box>
                      <Text className="text-[20px] sm:text-[24px] font-medium text-center">
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </SectionContainer>
      </Box>
    </Box>
  );
};

export default CountUp;
