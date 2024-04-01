import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function VideoPage() {
  // Sample video data
  const videos = [
    { title: "Video 1", url: "https://example.com/video1.mp4" },
    { title: "Video 2", url: "https://example.com/video2.mp4" },
    { title: "Video 3", url: "https://example.com/video3.mp4" },
    // Add more videos as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Adjust the button position based on screen size
  const buttonTop = useBreakpointValue({ base: "50%", md: "40%" });
  const buttonSide = useBreakpointValue({ base: "5%", md: "2%" });

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
    <Box textAlign="center">
      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Our Favorite Videos
      </Text>

      {/* Video Carousel */}
      <Flex justifyContent="center" position="relative">
        {/* Previous Video Button */}
        <IconButton
          aria-label="Previous Video"
          icon={<BiLeftArrowAlt />}
          colorScheme="blue"
          borderRadius="full"
          position="absolute"
          left={buttonSide}
          top={buttonTop}
          onClick={goToPreviousVideo}
        />
        {/* Next Video Button */}
        <IconButton
          aria-label="Next Video"
          icon={<BiRightArrowAlt />}
          colorScheme="blue"
          borderRadius="full"
          position="absolute"
          right={buttonSide}
          top={buttonTop}
          onClick={goToNextVideo}
        />
        {/* Display Current Video */}
        <Box>
          {/* Video Player */}
          <video width="560" height="315" controls>
            <source src={videos[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Title */}
          <Text textAlign="center" mt={2} fontWeight="bold">
            {videos[currentIndex].title}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default VideoPage;
