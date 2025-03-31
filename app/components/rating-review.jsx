import { Star } from "lucide-react";
import Box from "./box";

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <Box className="flex items-center justify-center gap-x-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const fillPercentage = Math.min(
          100,
          Math.max(0, (rating - index) * 100)
        );

        return (
          <Box key={index} className="relative">
            {/* Background Star (Unfilled) */}
            <Star
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              strokeWidth={0}
            />

            {/* Foreground Star (Filled) */}
            <Box
              style={{
                width: `${fillPercentage}%`,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Star
                className="w-4 h-4 text-[#f0542d]"
                fill="currentColor"
                strokeWidth={0}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default StarRating;
