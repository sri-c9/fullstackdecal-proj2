import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import logofile from "/public/noteworthy-logo.png";

import "./Home.css";

function Home() {
  return (
    <>
      <Box id="home-body-block">
        <NavBar />
        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          paddingTop={50}
        >
          <Heading as="h1" id="title-text" color="black ">
            Noteworthy
          </Heading>

          <Text
            fontSize="25"
            color="white"
            mt="55vh" 
          >
            YOUR FRIENDLY NEIGHBORHOOD A CAPELLA GROUP
          </Text>
        </Flex>
      </Box>
    </>
  );
}

function NavBar() {
  return (
    <Flex align="center" position="sticky" top={0} zIndex="1">
      <Logo />
      <Spacer />
      <Flex>
        <Box paddingRight={15}>
          <LinkButton to="/about-us">About Us</LinkButton>
        </Box>

        <Box paddingRight={15}>
          <LinkButton to="/fav-videos">Favorite Videos</LinkButton>
        </Box>
        <Box paddingRight={15}>
          <LinkButton to="/members">Members</LinkButton>
        </Box>
      </Flex>
    </Flex>
  );
}

function LinkButton({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button colorScheme="teal" variant="solid">
        {children}
      </Button>
    </Link>
  );
}

function Logo() {
  return (
    <Box>
      <Link>
        <Image src={logofile} alt="Logo" boxSize="100px" />
      </Link>
    </Box>
  );
}

export default Home;
