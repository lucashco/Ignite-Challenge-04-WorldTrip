import {Flex } from "@chakra-ui/react";
import TravelTypesItens from "./TravelTypesItens";

export default function TravelTypes() {

  return(
    <Flex
      wrap="wrap"
      maxW={1160}
      height="9rem"
      px={["0rem", "1rem"]}
      mx={["3.12rem", "3.12rem", "auto"]}
      mt="20"
      justifyContent="space-between"
      position="relative"
      _after={{
        content:'""',
        position: "absolute",
        width: "5.62rem",
        height: "2px",
        backgroundColor: "#47585B",
        bottom: "-10",
        right: "50%",
        transform: "translateX(50%)",
      }}
    >
      <TravelTypesItens text="vida noturna" img_url="/ImagesTravel/cocktail.svg" />
      <TravelTypesItens text="praia" img_url="/ImagesTravel/surf.svg"/>
      <TravelTypesItens text="moderno" img_url="/ImagesTravel/building.svg"/>
      <TravelTypesItens text="clássico" img_url="/ImagesTravel/museum.svg"/>
      <TravelTypesItens text="e mais..." img_url="/ImagesTravel/earth.svg"/>
    </Flex>
  )
}