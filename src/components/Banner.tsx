import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { theme } from "../styles/theme";

export default function Banner() {

  return(
    <Box
      width="100%"
      height={["10rem", "10rem", "23rem"]}
      bgImage= "url('/BackgroundBanner.svg')"
      bgSize= "cover"
      bgPosition= "center"
      backgroundRepeat= "no-repeat"
      >
      <Flex
        width="100%"
        px={["1rem", "1rem", "8.75rem"]}
        pt={["1.75rem", "1.75rem", "4.4rem"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          color={theme.colors.light.info}
        >
          <Heading
            as="h1"
            fontWeight="500"
            fontSize={["1.25rem", "1.25rem", "2.25rem"]}
            lineHeight={["1.85rem", "1.85rem", "3.37rem"]}
            mb={["0.5rem", "0.5rem", "1.25rem"]}
          >
            5 Continentes, <br/>infinitas possibilidades.
          </Heading>

          <Text
            fontWeight="400"
            fontSize={["0.85rem", "0.85rem", "1.25rem"]}
            lineHeight={["1.30rem", "1.30rem", "1.87rem"]}
          >
          Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou. 
          </Text>
        </Box>
        
        <Box
          display={["none", "none", "block"]}
          position="relative"
          height="16.8rem"
          width="26rem"
          >
          <Image
            pt="3rem"
            position="absolute"
            src="/Airplane.svg"
            alt="Airplane"
        />
        </Box>
      </Flex>

    </Box>
  )
}