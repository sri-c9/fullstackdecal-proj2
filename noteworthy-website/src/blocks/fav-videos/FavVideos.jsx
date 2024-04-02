import { useState } from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import YouTube from "react-youtube";

function VideoPage() {
  // Sample video data
  const videos = [
    { title: "Video 1", url: "n0p8MxT8AxI" },
    { title: "Video 2", url: "cDjY-1WuB3o" },
    { title: "Video 3", url: "kW57PpibCMA" },
    // Add more videos as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Adjust the button position based on screen size
  // const buttonTop = useBreakpointValue({ base: "50%", md: "40%" });
  // const buttonSide = useBreakpointValue({ base: "5%", md: "2%" });

  // Handler to navigate to the previous video
  const goToPreviousVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Handler to navigate to the next video
  const goToNextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex
      textAlign="center"
      flexDirection="column"
      margin={"5%"}
      id="fav-videos"
    >
      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Our Favorite Videos
      </Text>

      {/* Video Carousel */}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        {/* Previous Video Button */}

        <Box>
          <IconButton
            aria-label="Previous Video"
            icon={<BiLeftArrowAlt />}
            borderRadius="full"
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={goToPreviousVideo}
            backgroundColor={"#93BBED"}
            color={"black"}
          />
        </Box>
        {/* Display Current Video */}
        <Box position="relative" width="960px" height="540px">
          {/* Video Player */}
          <YouTube
            videoId={videos[currentIndex].url}
            opts={{ width: "960px", height: "540px" }}
          />
        </Box>

        {/* Next Video Button */}
        <Box>
          <IconButton
            aria-label="Next Video"
            icon={<BiRightArrowAlt />}
            // colorScheme="blue"
            backgroundColor={"#93BBED"}
            color={"black"}
            borderRadius="full"
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={goToNextVideo}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default VideoPage;
