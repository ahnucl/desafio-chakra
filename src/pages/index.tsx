import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  HStack,
  Divider,
  Link,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { GetServerSideProps } from 'next'

import RouteLink from 'next/link'

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

import { api } from '../utils/api'

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

interface ContinentCall {
  id: string
  name: string
  callPhrase: string
  callImage: string
}
interface HomeProps {
  contintentsCall: ContinentCall[]
}

export default function Home({ contintentsCall }: HomeProps) {
  return (
    <Box>
      <Header />

      <Stack gap="80px" align="center" mb="40px">
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

          <Flex
            maxW="1240px"
            align="center"
            sx={{
              '--swiper-pagination-color': 'colors.highlight',
              '--swiper-pagination-bullet-inactive-color': 'colors.dark.info',
              '--swiper-pagination-bullet-width': '1rem',
              '--swiper-pagination-bullet-height': '1rem',
              '--swiper-navigation-color': 'colors.highlight',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '.swiper-button-next': {
                right: 35,
              },
              '.swiper-button-prev': {
                left: 35,
              },
              '.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet ':
                {
                  transition: 'all 0.2s',
                  '&:hover': {
                    filter: 'opacity(0.7)',
                  },
                },
              '.swiper-button-prev, .swiper-button-next': {
                '&::after': {
                  fontSize: '1.8rem',
                },
              },
            }}
          >
            <Swiper
              loop
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {contintentsCall.map(call => (
                <SwiperSlide key={call.id}>
                  <Flex
                    h="450"
                    bgImage={call.callImage}
                    bgPosition="center"
                    m="auto"
                    direction="column"
                    justify="center"
                    align="center"
                    fontWeight="bold"
                    color="light.headingsAndText"
                  >
                    <RouteLink href={`/continent/${call.id}`} passHref>
                      <Link
                        _hover={{
                          textDecor: 'none',
                          transition: 'filter 0.2s',
                          '&': {
                            filter: 'opacity(0.8)',
                          },
                        }}
                      >
                        <Text fontSize="5xl">{call.name}</Text>
                        <Text fontSize="2xl">{call.callPhrase}</Text>
                      </Link>
                    </RouteLink>
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('continents')

  return {
    props: {
      contintentsCall: data,
    },
  }
}
