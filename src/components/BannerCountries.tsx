import { Box, Heading } from "@chakra-ui/react";
import { theme } from "../styles/theme";

interface BannerCountriesProps {
  name: string,
}

export default function BannerCountries({name}: BannerCountriesProps) {
  return(
    <>
      <Box
      width="100vw"
      height="31rem"
      bgImage= "url('/CountriesImages/europa.jpg')"
      bgSize= "cover"
      bgPosition= "center"
      backgroundRepeat= "no-repeat"
      position="relative"
    >
      <Heading
        position="absolute"
        bottom="3.5rem"
        left="9rem"
        as="h1"
        fontSize="3rem"
        fontWeight="600"
        color={theme.colors.light.headingAndText}
      >
        {name}
      </Heading>

    </Box>
    </>
  )
}