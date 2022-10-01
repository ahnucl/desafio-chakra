import { Flex, HStack, Image, Text } from '@chakra-ui/react'

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

export function TravelTypes() {
  return (
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
  )
}
