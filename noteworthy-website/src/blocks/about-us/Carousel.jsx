import { useState } from "react";
import { IconButton, Image, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import flyer from "./flyer.png";
import halloween from "./halloween.png";
import welcome from "./Welcome.png";
import west from "./West.jpg";

const images = [halloween, flyer, welcome, west];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
    backgroundColor: "#93BBED",
    rounded :"full"
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="full"
      h="full"
      maxW="600px"
      maxH="400px"
      m="40px auto"
      overflow="hidden"
    >
      <IconButton
        aria-label="Previous image"
        icon={<ChevronLeftIcon />}
        {...arrowStyles}
        left="0"
        onClick={handlePrev}
      />
      <Image src={images[currentImage]} objectFit="contain" boxSize="100%" />
      <IconButton
        aria-label="Next image"
        icon={<ChevronRightIcon />}
        {...arrowStyles}
        right="0"
        onClick={handleNext}
      />
    </Flex>
  );
};

export default Carousel;
