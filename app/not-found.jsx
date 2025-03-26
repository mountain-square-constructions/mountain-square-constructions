import Box from "./components/box";
import Text from "./components/text";

function NotFound() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Box className="text-9xl font-bold flex items-center justify-center">
        <Box className="relative">
          <Box
            as="span"
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"
          ></Box>
          <Box as="span" className="relative">
            4
          </Box>
        </Box>
        <Box className="relative">
          <Box
            as="span"
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"
          ></Box>
          <Box as="span" className="relative">
            0
          </Box>
        </Box>
        <Box className="relative">
          <Box
            as="span"
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"
          ></Box>
          <Box as="span" className="relative">
            4
          </Box>
        </Box>
      </Box>
      <Text className="mt-4 text-lg">
        This page does not exist.{" "}
        <a href="/" className="text-[#EC7601] hover:underline">
          Go back home.
        </a>
      </Text>
    </Box>
  );
}

export default NotFound;
