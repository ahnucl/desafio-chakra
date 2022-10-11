import { Box, Flex, Image, Text } from '@chakra-ui/react'

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

interface TravelTypesProps {
  showWide: boolean
}

export function TravelTypes({ showWide }: TravelTypesProps) {
  const lastChildStyling = {
    '&:last-child:nth-child(2n+1)': showWide
      ? {}
      : {
          margin: 'auto',
        },
  }

  return (
    <Flex
      w={['275px', '420px', '668px', null, '1160px']}
      justify="space-between"
      wrap="wrap"
      gap={['27px', '']}
    >
      {travelTypes.map(travelType => (
        <Flex
          key={travelType.text}
          direction={['row', 'row', 'column', 'column', 'column']}
          align="center"
          h={['', '', '145px']}
          w={['', '', '158px']}
          justify="space-between"
          sx={lastChildStyling}
        >
          {showWide && <Image src={travelType.icon} boxSize="85px" />}
          {!showWide && (
            <Box w={2} h={2} mr={2} bg="highlight" borderRadius="full" />
          )}
          <Text fontWeight={['medium', 'semibold']} fontSize={['lg', '2xl']}>
            {travelType.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}
