import { Heading, Image, Stack, Link, Flex, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'
import style from './style.module.css'
import { theme } from '../../styles/theme';

SwiperCore.use([Navigation, Pagination]);

export default function Slider() {
  const nameImagesAndLinks = ['europa', 'africa', 'asia', 'america do norte', 'america do sul', 'oceania'];
  const headingH1 = ['Europa', 'Africa', 'Asia', 'America do Norte', 'America do Sul', 'Oceania'];
  const headingH2 = ['O continente mais antigo', 'Natureza sem igual', 'Culturas milenares',
                      'Aventuras de tirar o folegô', 'Prais mais bonitas', 'Turistar a vontade']
  const slides=[];
  for (let i = 0; i < nameImagesAndLinks.length; i++) {
    slides.push(
      <SwiperSlide
        key={nameImagesAndLinks[i]}
      >
     
        <Image
          src={`./SliderImages/${nameImagesAndLinks[i]}.jpg`}
          alt={`${nameImagesAndLinks[i]}`}
          width="100%"
          height="100%"
          objectFit="cover"
          />

          <Flex
            color={theme.colors.light.info}
            position="absolute"
            top="0"
            right="0"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Link 
              href={`/${nameImagesAndLinks[i]}`}
              transitionDuration="0.2s"
              _hover={{filter: "brightness(0.5)"}}
              _active={{filter: "brightness(0.5)"}}
            >
              <Stack 
                alignItems="center" 
                textShadow="0 0 3px black, 0 0 5px black"
                textAlign="center"  
              >
                <Heading as="h1" fontSize="3rem" mb="1rem">
                  {headingH1[i]}
                </Heading>
                <Heading as="h2" fontSize="1.5rem">
                {headingH2[i]}
                </Heading>
              </Stack>
            </Link>
          </Flex>  
      </SwiperSlide>
    );
    
  }
  
  return(
    <>
      <Flex
        maxWidth={1240}
        height={450}
        mb="20"
        mx="auto"
        >
        <Swiper
          loop= {true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${style.bullets} swiper-pagination-bullet"
                            style=background-color:${theme.colors.highlight}
                      ></span>`;
            }
          }}
          spaceBetween={0}
          slidesPerView={1}
        >
          <Box className="swiper-button-next" color={theme.colors.highlight}></Box>
          <Box className="swiper-button-prev" color={theme.colors.highlight}></Box>
          {slides}
        </Swiper>
      </Flex>

      
    </>
  )
}