import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'
import { Info } from '../../components/InfoContainer'
import { api } from '../../utils/api'

interface Info {
  id: number
  description: string
  count: number
}

interface Plus100City {
  id: number
  city: string
  country: string
  flag: string
}
interface ContinentProps {
  name: string
  description: string
  callImage: string
  pageImage?: string
  info: Info[]
  plus100Cities: Plus100City[]
}

export default function Continent({
  name,
  description,
  callImage,
  pageImage,
  info,
  plus100Cities,
}: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box mb="40px">
      <Header showWide={!!isWideVersion} />
      <Stack spacing={['24px', '80px']} align="center">
        <ContinentBanner bgImage={pageImage || callImage} title={name} />

        <Flex
          w={['100vw', '1160px']}
          justify="space-between"
          direction={['column', 'row']}
          align="center"
          px={['16px', null]}
          gap={4}
        >
          <Text
            fontSize={['sm', '2xl']}
            w={['1005', '600px']}
            textAlign="justify"
          >
            {description}
          </Text>

          {/* Info Container */}
          <Flex w={['100%', '490px']} justify="space-between">
            {info.map(infoItem => (
              <Info
                key={infoItem.id}
                count={infoItem.count}
                description={infoItem.description}
                hasToolTip={infoItem.id === 2}
              />
            ))}
          </Flex>
        </Flex>

        {/* Cidades Mais 100 */}
        <Stack
          w={['100vw', '1160px']}
          spacing={['20px', '40px']}
          px={['1rem', '0']}
          pt={['8px', '0']}
        >
          <Heading fontSize={['2xl', '4xl']} fontWeight="medium">
            Cidades +100
          </Heading>
          <Flex gap="45px" wrap="wrap" justify="center">
            {plus100Cities.map(city => (
              <Flex
                key={city.id}
                w="256px"
                h="279px"
                bg="light.white"
                flexDir="column"
                border="1px"
                borderRadius="4px"
                borderColor="highlight50"
                justify={['center', 'space-between']}
              >
                <Image src={city.flag} w="256px" h="173" objectFit="cover" />
                <Flex
                  justify="space-between"
                  p="1.125rem"
                  align="center"
                  maxW="full"
                >
                  <Stack gap={3} fontFamily="Barlow">
                    <Text
                      fontSize="xl"
                      fontWeight="semibold"
                      lineHeight="shorter"
                    >
                      {city.city}
                    </Text>
                    <Text color="dark.info" lineHeight="none">
                      {city.country}
                    </Text>
                  </Stack>
                  <Image
                    src={city.flag}
                    boxSize="30px"
                    objectFit="cover"
                    borderRadius="full"
                  />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { id } = params! // Erro por conta da parte do "| undefined"

  const { data } = await api.get(`/continents/${id}`)

  return {
    props: data,
  }
}
