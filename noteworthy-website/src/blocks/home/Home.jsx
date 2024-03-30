import {
  Box,
  Link,
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
            mt="55vh" // Adjust the margin-top to move the text down
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
          <Button>About Us</Button>
        </Box>

        <Box paddingRight={15}>
          <Button>Favorite Videos</Button>
        </Box>
        <Box paddingRight={15}>
          <Button>Members</Button>
        </Box>
      </Flex>
    </Flex>
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
