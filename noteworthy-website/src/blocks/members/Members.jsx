import { Flex, Text, Image } from "@chakra-ui/react";
import jsonData from "./data/output.json";

function Members() {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center" // Center the content along the main axis
    >
      {jsonData.map((item, index) => (
        <MemberCard key={index} memberData={item} />
      ))}
    </Flex>
  );
}

function MemberCard({ memberData }) {
  return (
    <Flex
      flexDirection={"column"}
      boxShadow={"md"}
      rounded="md"
      padding={8}
      margin={5}
      style={{
        flexBasis: "30%",
        marginBottom: "20px",
        justifyContent: "center", // Center the text within the div
        transition: "transform 0.3s ease-in-out", // Add smooth transition for transform property
      }}
      _hover={{
        textDecoration: "none",
        transform: "scale(1.075)", // Increase size on hover
      }}
    >
      <Text>{memberData.Name}</Text>
      <Image src={memberData.ImagePath} />
      {/* Access other properties of memberData as needed */}
    </Flex>
  );
}

export default Members;
