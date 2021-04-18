import { Text } from "@chakra-ui/react";
import { theme } from "../styles/theme";

export default function LetsGo() {
  return(
    <Text
      fontSize="2.25rem"
      fontWeight="500"
      lineHeight="3.37rem"
      color={theme.colors.dark.headingAndText}
      textAlign="center"
      mt={["3.75rem", "8rem"]}
      mb={["1.25rem", "3.25rem"]}
    >
      Vamos nessa?<br/>
      Então escolha seu continente
    </Text>
  )
}