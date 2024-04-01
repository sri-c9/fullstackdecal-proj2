import { Flex, Text, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import jsonData from "./data/output.json";

function Members() {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {jsonData.map((item, index) => (
        <MemberCard key={index} memberData={item} />
      ))}
    </Flex>
  );
}

function MemberCard({ memberData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        flexDirection="column"
        boxShadow="md"
        rounded="md"
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
        onClick={onOpen} // Open the modal on click
      >
        <Text>{memberData.Name}</Text>
        <Image src={memberData.ImagePath} />
      </Flex>

      {/* Modal for displaying member details */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{memberData.Name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center">
              <Image src={memberData.ImagePath} mb={4} />
              {/* You can add more detailed information here */}
              <Text><b>Pronouns:</b> {memberData.Pronouns}</Text>
              <Text><b>Voice Part:</b> {memberData.VoicePart}</Text>
              <Text><b>Major(s)/Minor(s):</b> {memberData["Major(s)/Minor(s)"]}</Text>
              <Text><b>Interests:</b> {memberData.Interests}</Text>
              <Text><b>Bio:</b> {memberData.Bio}</Text>
              {/* Add more fields as needed */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Members;
