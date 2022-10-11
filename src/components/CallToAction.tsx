import { Box, Divider, Flex, Link, Stack, Text } from '@chakra-ui/react'
import RouteLink from 'next/link'
import { SwiperSlide } from 'swiper/react'
import { ContinentCall } from '../pages'
import { Carousel } from './Carousel'

interface CallToActionProps {
  contintentsCall: ContinentCall[]
}

export function CallToAction({ contintentsCall }: CallToActionProps) {
  return (
    <Stack spacing={['24px', '52px']} align="center" textAlign="center">
      <Divider
        w={['60px', '90px']}
        borderColor="dark.headingsAndText"
        borderWidth={['1px', '2px']}
      />

      <Box fontWeight="medium" fontSize={['xl', '4xl']}>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>

      <Carousel>
        {contintentsCall.map(call => (
          <SwiperSlide key={call.id}>
            <Flex
              h={['250', '450']}
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
                    transition: 'filter 0.3s',
                    '&': {
                      filter: 'opacity(0.8)',
                    },
                  }}
                >
                  <Text fontSize={['2xl', '5xl']}>{call.name}</Text>
                  <Text fontSize={['sm', '2xl']}>{call.callPhrase}</Text>
                </Link>
              </RouteLink>
            </Flex>
          </SwiperSlide>
        ))}
      </Carousel>
    </Stack>
  )
}
