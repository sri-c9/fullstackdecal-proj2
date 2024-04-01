import React from 'react';
import { Box, Text, Link, Image, VStack, Heading, Flex } from '@chakra-ui/react';
import Carousel from "./Carousel";
import Hall from "./Hall.jpg"; 
import Follow from "./Follow.png";

function AboutUs() {
  return (
    <Box textAlign="center" mt="20vh">
      <Heading as="h1" size="xl">About Us</Heading>
      <Text mt={4}>
        <strong>In-vest-ed in A Cappella</strong><br />
        We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!<br />
        Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
      </Text>

      {/* Content Sections */}
      <Flex justifyContent="space-evenly" mt="20vh" direction={{ base: "column", md: "row" }} alignItems="start">
        {/* Events Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg">Events</Heading>
          <Box position="relative" w="full" h="600px">
            <Carousel />
          </Box>
        </VStack>

        {/* Hire Us Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg" alignSelf="center">Hire Us</Heading>
          <Text>
            Please e-mail our business manager at
            <Link href="mailto:noteworthy@ucchoral.berkeley.edu" color="teal.500"> noteworthy@ucchoral.berkeley.edu </Link> 
            and fill out this
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform" color="teal.500"> form</Link>.
          </Text>
          <Image src={Hall} alt="Hall" boxSize="100%"/>
        </VStack>

        {/* Follow Us Section */}
        <VStack flex={1} minW={{ base: "100%", md: "30%" }} spacing={4}>
          <Heading as="h2" size="lg">Follow Us</Heading>
          <Image src={Follow} alt="Follow" boxSize="100%"/>
        </VStack>
      </Flex>
    </Box>
  );
}

export default AboutUs;
