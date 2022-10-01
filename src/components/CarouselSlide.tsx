import { Flex, Link, Text } from '@chakra-ui/react'
import RouteLink from 'next/link'
import { SwiperSlide } from 'swiper/react'
import { ContinentCall } from '../pages'

interface CarouselSlideProps {
  continentCall: ContinentCall
}

export function CarouselSlide({
  continentCall: { callImage, callPhrase, id, name },
}: CarouselSlideProps) {
  return (
    <SwiperSlide>
      <Flex
        h="450"
        bgImage={callImage}
        bgPosition="center"
        m="auto"
        direction="column"
        justify="center"
        align="center"
        fontWeight="bold"
        color="light.headingsAndText"
      >
        <RouteLink href={`/continent/${id}`} passHref>
          <Link
            _hover={{
              textDecor: 'none',
              transition: 'filter 0.3s',
              '&': {
                filter: 'opacity(0.8)',
              },
            }}
          >
            <Text fontSize="5xl">{name}</Text>
            <Text fontSize="2xl">{callPhrase}</Text>
          </Link>
        </RouteLink>
      </Flex>
    </SwiperSlide>
  )
}
