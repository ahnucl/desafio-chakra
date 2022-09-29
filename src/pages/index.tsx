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
import { GetServerSideProps } from 'next'

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

          <Flex maxW="1240px" align="center">
            <Swiper
              loop
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {contintentsCall.map(call => (
                <SwiperSlide>
                  <Flex
                    h="450"
                    bg="gray"
                    key={call.id}
                    m="auto"
                    direction="column"
                    justify="center"
                    fontWeight="bold"
                    color="light.headingsAndText"
                  >
                    <Text fontSize="5xl">{call.name}</Text>
                    <Text fontSize="2xl">{call.callPhrase}</Text>
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
