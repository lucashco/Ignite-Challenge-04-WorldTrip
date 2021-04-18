import { Box, Flex, Image, Text} from "@chakra-ui/react";
import { theme } from "../styles/theme";

interface TravelTypesItensProps {
  text: string;
  img_url: string;
}

export default function TravelTypesItens({text, img_url}: TravelTypesItensProps) {

  return(
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      flexDirection={["row", "row", "column"]}
      color={theme.colors.dark.headingAndText}
      mr="1rem"
    >
        <Box
          display={["block", "block", "none"]}
          backgroundColor={theme.colors.highlight}
          width="0.8rem"
          height="0.8rem"
          borderRadius="50%"
          mr="0.5rem"
        />
        <Image
          display={["none", "none", "block"]} 
          src={img_url}
          width= "4.3rem"
          height= "4.3rem"
          mb="6"
        />
      <Text  
        fontSize={["1.12rem", "1.12rem" ,"1.5rem"]}
        fontWeight={["500", "500", "600"]}
      >
        {text}
      </Text>
    </Flex>
  )
}


