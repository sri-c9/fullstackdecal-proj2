import { Box, Link, Flex, Image, Spacer } from "@chakra-ui/react";
import logofile from "/public/noteworthy-logo.png";

function Home() {
  return (
    <>
      <NavBar />
      <Box as="section"></Box>
    </>
  );
}

function NavBar() {
  return (
    <Flex align="center">
      <Logo />
      <Spacer paddingRight={"40px"} />
      <Flex>
        <Link mr={4}>About Us</Link>
        <Link mr={4}>Favorite Videos</Link>
        <Link mr={4}>Members</Link>
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
