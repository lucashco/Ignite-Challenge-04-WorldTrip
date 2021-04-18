import { Flex, Image, Link } from "@chakra-ui/react";

export default function Header() {
  return(
    <Flex 
      alignItems="center" 
      justifyContent="center"
      width="100%"
      height="28"
    >
      <Link href="/">
        <Image 
          src="/Logo.svg" 
          alt="logo"  
          width="11.5rem"
          height="2.85rem"
        />
      </Link>
    </Flex>
  )
}