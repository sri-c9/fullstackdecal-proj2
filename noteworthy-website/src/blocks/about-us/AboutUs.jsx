import {
  Box,
  Text,
  Link,
  Image,
  VStack,
  Heading,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import Hall from "./Hall.jpg";
import Follow from "./Follow.png";
import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";

function AboutUs() {
  return (
    <Box textAlign="center" mt="20vh" bgColor={""} id="about-us">
      <Heading as="h1" size="xl">
        About Us
      </Heading>
      <Text mt={4}>
        <strong>In-vest-ed in A Cappella</strong>
        <br />
        We’re a lower-voices a cappella group known for our fun performances and
        fresh takes on popular songs! It always feels sunny when we perform, and
        not just because of our golden vests!
        <br />
        Since our founding in 2000, we’ve gone million-view-viral on YouTube
        multiple times, released an album entirely composed of original songs,
        and performed at the 2022 UC Berkeley commencement.
      </Text>

      {/* Content Sections */}
      <Flex
        justifyContent="space-evenly"
        mt="20vh"
        direction={{ base: "column", md: "row" }}
        alignItems="start"
      >
        {/* Events Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg">
            Events
          </Heading>
          <Box position="relative" w="full" h="600px">
            <Carousel />
          </Box>
        </VStack>

        {/* Hire Us Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg" alignSelf="center">
            Hire Us
          </Heading>
          <Text>
            Please e-mail our business manager at
            <Link
              href="mailto:noteworthy@ucchoral.berkeley.edu"
              color="teal.500"
            >
              {" "}
              noteworthy@ucchoral.berkeley.edu{" "}
            </Link>
            and fill out this
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform"
              color="teal.500"
            >
              {" "}
              form
            </Link>
          </Text>
          <Image
            src={Hall}
            alt="Hall"
            boxSize={{ base: "50%", md: "70%" }}
            rounded={"lg"}
          />
        </VStack>

        {/* Follow Us Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg">
            Follow Us
          </Heading>

          <Link href="https://www.instagram.com/cal_noteworthy/" isExternal>
            <IconButton
              icon={<BiLogoInstagram />}
              bg="#405DE6"
              _hover={{ bg: "#314EAF" }}
              _active={{ bg: "#314EAF" }}
              color="white"
            />
          </Link>

          <Link href="https://www.tiktok.com/@uc_noteworthy" isExternal>
            <IconButton
              icon={<BiLogoTiktok />}
              bg="#FF0000"
              _hover={{ bg: "#CC0000" }}
              _active={{ bg: "#CC0000" }}
              color="white"
            />
          </Link>

          <Image
            src={Follow}
            alt="Follow"
            boxSize={{ base: "50%", md: "70%" }}
            rounded={"lg"}
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default AboutUs;
