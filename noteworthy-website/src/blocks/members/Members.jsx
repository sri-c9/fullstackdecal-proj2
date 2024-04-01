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
      style={{
        flexBasis: "30%",
        marginBottom: "20px",
        justifyContent: "center", // Center the text within the div
      }}
    >
      <Text>{memberData.Name}</Text>
      <Image src={memberData.ImagePath} />
      {/* Access other properties of memberData as needed */}
    </Flex>
  );
}

export default Members;
