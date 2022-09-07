import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const travelTypes = [
  {
    icon: '/images/cocktail.svg',
    text: 'vida noturna',
  },
  {
    icon: '/images/surf.svg',
    text: 'praia',
  },
  {
    icon: '/images/building.svg',
    text: 'moderno',
  },
  {
    icon: '/images/museum.svg',
    text: 'classico',
  },
  {
    icon: '/images/earth.svg',
    text: 'e mais...',
  },
]

export default function Home() {
  return (
    <Box>
      <Header />

      <Stack gap="80px" align="center">
        <Banner />

        {/* Travel Types */}
        <HStack justify="space-between" w="1160px">
          {travelTypes.map(travelType => (
            <Flex
              key={travelType.text}
              direction="column"
              align="center"
              h="145px"
              w="158px" // Tive que forçar essa largura por conta do alinhamento do item do meio
              justify="space-between"
            >
              <Image src={travelType.icon} boxSize="85px" />
              <Text fontWeight="semibold" fontSize="2xl">
                {travelType.text}
              </Text>
            </Flex>
          ))}
        </HStack>

        {/* Call to Action */}
        <Stack spacing="52px" align="center" textAlign="center">
          <Divider
            w="90px"
            borderColor="dark.headingsAndText"
            borderWidth="2px"
          />

          <Box fontWeight="medium" fontSize="4xl">
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Box>

          <Flex maxW="100vw" align="center">
            <Swiper
              loop
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <Box w="1240px" h="450" bg="red">
                  Slide 1
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="red">Slide 2</Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="red">Slide 3</Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="red">Slide 4</Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="red">Slide 5</Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="red">Slide 6</Box>
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  )
}
