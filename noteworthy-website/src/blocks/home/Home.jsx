import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import logofile from "/src/assets/noteworthy-logo.png";
import "./Home.css";

const scollToAbout = () => {
  var id = "about-us";
  console.log("in scrollToBlock for id=", id);

  const block = document.getElementById(id); // Remove # from id
  if (block) {
    block.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToVids = () => {
  var id = "fav-videos";
  console.log("in scrollToBlock for id=", id);

  const block = document.getElementById(id); // Remove # from id
  if (block) {
    block.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToMembers = () => {
  var id = "members";
  console.log("in scrollToBlock for id=", id);

  const block = document.getElementById(id); // Remove # from id
  if (block) {
    block.scrollIntoView({ behavior: "smooth" });
  }
};

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

          <Text fontSize="25" color="white" mt="55vh">
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
        <Box
          onClick={scollToAbout}
          paddingRight={15}
          _hover={{
            textDecoration: "none",
            transform: "scale(1.10)", // Increase size on hover
            transition: "transform 0.3s ease-in-out", // Add smooth transition
          }}
        >
          {" "}
          <NavBarButtons>About Us</NavBarButtons>
        </Box>

        <Box
          onClick={scrollToVids}
          paddingRight={15}
          _hover={{
            textDecoration: "none",
            transform: "scale(1.10)", // Increase size on hover
            transition: "transform 0.3s ease-in-out", // Add smooth transition
          }}
        >
          {" "}
          <NavBarButtons>Favorite Videos</NavBarButtons>
        </Box>
        <Box
          onClick={scrollToMembers}
          paddingRight={15}
          _hover={{
            textDecoration: "none",
            transform: "scale(1.10)", // Increase size on hover
            transition: "transform 0.3s ease-in-out", // Add smooth transition
          }}
        >
          <NavBarButtons>Members</NavBarButtons>
        </Box>
      </Flex>
    </Flex>
  );
}

function NavBarButtons({ children, to }) {
  return (
    <Link
      href={to}
      variant="solid"
      padding="0.5rem 1rem"
      borderRadius="md"
      bg="#93BBED"
      textDecoration="none"
      borderWidth={2}
      borderColor="transparent"
      style={{
        flexBasis: "30%",
        transition: "transform 0.3s ease-in-out", // Add smooth transition for transform property
      }}
      _hover={{
        transform: "scale(1.05)", // Apply transform on hover
      }}
    >
      {children}
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
