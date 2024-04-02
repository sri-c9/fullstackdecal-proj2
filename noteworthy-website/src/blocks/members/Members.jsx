import { useState } from "react";
import {
  Flex,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Button,
} from "@chakra-ui/react";
import jsonData from "./data/output.json";

function Members() {
  return (
    <Flex
      flexDirection={"column"}
      textAlign={"center"}
      backgroundColor={"#87B8E1"}
      padding={"15px"}
    >
      <Heading>Members</Heading>
      <Text>Click to learn more!</Text>
      <Flex flexWrap="wrap" justifyContent="center">
        {jsonData.map((item, index) => (
          <MemberCard key={index} memberData={item} index={index} />
        ))}
      </Flex>
    </Flex>
  );
}

function MemberCard({ memberData, index }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(index);

  const nextMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jsonData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jsonData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Flex
        id="members"
        backgroundColor={"white"}
        flexDirection="column"
        boxShadow="md"
        rounded="xl"
        p={8}
        m={5}
        style={{
          flexBasis: "30%",
          marginBottom: "20px",
          justifyContent: "center",
          transition: "transform 0.3s ease-in-out",
        }}
        _hover={{
          textDecoration: "none",
          transform: "scale(1.075)",
        }}
        onClick={() => {
          setCurrentIndex(index);
          onOpen();
        }} // Open the modal on click
      >
        <Heading as="h3" size={"lg"}>
          {memberData.Name}
        </Heading>
        <Image rounded="xl" src={memberData.ImagePath} />
      </Flex>

      {/* Modal for displaying member details */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{jsonData[currentIndex].Name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center">
              <Image src={jsonData[currentIndex].ImagePath} mb={4} />
              {/* You can add more detailed information here */}
              <Text maxWidth="90%">
                <b>Pronouns:</b> {jsonData[currentIndex].Pronouns}
              </Text>
              <Text maxWidth="90%">
                <b>Voice Part:</b> {jsonData[currentIndex].VoicePart}
              </Text>
              <Text maxWidth="90%">
                <b>Major(s)/Minor(s):</b>{" "}
                {jsonData[currentIndex]["Major(s)/Minor(s)"]}
              </Text>
              <Text maxWidth="90%">
                <b>Interests:</b> {jsonData[currentIndex].Interests}
              </Text>
              <Text maxWidth="90%">
                <b>Bio:</b> {jsonData[currentIndex].Bio}
              </Text>
              {/* Add more fields as needed */}
              <Flex mt={4}>
                <Button onClick={prevMember}>Previous</Button>
                <Button ml={4} onClick={nextMember}>
                  Next
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Members;
