import Head from "next/head";
import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { GetStaticPaths, GetStaticProps } from "next";
import { theme } from "../styles/theme";
import ReactCountryFlag from "react-country-flag";


interface Nation {
  id: number;
  name: string;
  title: string;
  description: string;
  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
  url_nation_img: string;
  cities_100:{
    city: string;
    country: string;
    country_code: string;
    img_url: string;
  }[]
}

interface NationProps {
  nation: Nation;
}

export default function Nation({nation}: NationProps) {

  return (
    <>
      <Head>
        <title> {nation.title} | WorldTrip</title>
      </Head>
      <Box
      width="100%"
      height={["9.4rem", "31rem"]}
      bgImage= {`url('${nation.url_nation_img}')`}
      bgSize= "cover"
      bgPosition= "center"
      backgroundRepeat= "no-repeat"
      position="relative"
    >
      <Heading
        as="h1"
        position={["unset", "absolute"]}
        textAlign="center"
        lineHeight="9.4rem"
        bottom="3.5rem"
        left="9rem"
        fontSize={["1.75rem", "3rem"]}
        fontWeight="600"
        color={theme.colors.light.headingAndText}
        textShadow="0 0 3px black, 0 0 5px black"
      >
        {nation.title}
      </Heading>
    </Box>
    <Flex
      flexWrap="wrap"
      maxWidth={1560}
      px="1rem"
      mx="auto"
      mt="5rem"
      justifyContent={["center", "center", "center", "center", "space-between"]}
      alignItems="center"
    >
      <Box
        width="37.5rem"
      >
        <Text
          textAlign="justify"
          fontSize={["0.9rem", "1.5rem"]}
          fontWeight="400"
          lineHeight={["1.3rem", "2.25rem"]}
          color={theme.colors.dark.headingAndText}
        >
          {nation.description}
        </Text>
      </Box>

      <Flex
        px="1rem"
        mt={["1rem", "1rem"]}
        flexWrap="wrap"
        textAlign="center"
        justifyContent="center"
      >
        <Box mr={["1.6rem", "2.6rem"]}>
          <Text
            fontSize={["2rem", "3rem"]}
            fontWeight="600"
            color={theme.colors.highlight}
            lineHeight="4.5rem"
          >
            {nation.num_countries}
          </Text>
          <Text
            fontSize={["1.12rem", "1.5rem"]}
            fontWeight="600"
            lineHeight="2.25rem" 
          >
            países
          </Text>
        </Box>

        <Box mr={["1.6rem", "2.6rem"]}>
          <Text
            fontSize={["2rem", "3rem"]}
            fontWeight="600"
            color={theme.colors.highlight}
            lineHeight="4.5rem"
          >
            {nation.num_languages}
          </Text>
          <Text
            fontSize={["1.12rem", "1.5rem"]}
            fontWeight="600"
            lineHeight="2.25rem" 
          >
            línguas
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={["2rem", "3rem"]}
            fontWeight="600"
            color={theme.colors.highlight}
            lineHeight="4.5rem"
          >
            {nation.num_city_most_visited}
          </Text>
          <Text
            fontSize={["1.12rem", "1.5rem"]}
            fontWeight="600"
            lineHeight="2.25rem" 
          >
            cidades +100
            <Tooltip label="Número de cidades entre as 100 mais visitadas" placement="bottom">
              <InfoOutlineIcon ml="5px" w={["10px", "16px"]} h={["10px", "16px"]} color={theme.colors.dark.info50}/>
            </Tooltip>
          </Text>
        </Box>
      </Flex>

    </Flex>
    
    <Box
      maxWidth={1560}
      px="1rem"
      mx="auto"
      mt="5rem"
    >
      <Heading 
        as="h2" 
        fontWeight="500" 
        fontSize={["1.5rem", "2.25rem"]}
        lineHeight={["2.25rem", "3.37rem"]}
        color={theme.colors.dark.headingAndText}
      >
        Cidades +100
      </Heading>

      <Flex
        mt="2.5rem"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
      >
        {
          (nation.cities_100).map((element) => {
            return(
              <Flex
                key={element.city}
                flexDirection="column"
                mb="2.8rem"
                borderWidth="1px"
                borderStyle="solid"
                borderColor={theme.colors.highlight50}
              >
                <Image
                  src={element.img_url}
                  maxWidth={256}
                  height={173}
                  objectFit="cover"
                />
                <Box mt="1rem" ml="1.5rem" mb="1.5rem" position="relative">
                  <Text 
                    fontWeight="600" 
                    fontSize="1.25rem"
                    color={theme.colors.dark.headingAndText}
                    mb="0.75rem"
                  >
                    {element.city}
                  </Text>

                  <Text
                    fontWeight="500" 
                    fontSize="1rem"
                    color={theme.colors.dark.info}
                  >
                    {element.country}
                  </Text>
                  <ReactCountryFlag
                    countryCode={element.country_code}
                    svg
                    style={{
                      position:'absolute',
                      bottom:'15px',
                      right:'24px',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                    }}
                    title="US"
                  />
                </Box>
              </Flex>
            )
          })
        }
      </Flex>
    </Box>  
  </>
  )
}

export const getStaticProps:GetStaticProps = async( context ) => {
  const { nation } = context.params;
  const request = await fetch('http://localhost:3000/api/get');
  const json = await request.json();
  let data_filter = json.filter(element => element.name == nation);
  return {
    props: {
      nation: data_filter[0]
    },
    redirect: 60 * 60 * 24 //24 horas
  }

}

export const getStaticPaths:GetStaticPaths = async () => {
  const request = await fetch('http://localhost:3000/api/get');
  const json = await request.json();
  let allPaths = [];
  for(let data of json) {
    allPaths.push(data.name);
  }
  const paths = allPaths.map((path) => {
    return{
      params: {
        nation: path
      }
    }
  })
  return{
    paths,
    fallback: true,
  }
}
