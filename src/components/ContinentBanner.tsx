import { Box, Flex, Heading } from '@chakra-ui/react'

interface ContinentBannerProps {
  bgImage: string
  title: string
}

export function ContinentBanner({ title, bgImage }: ContinentBannerProps) {
  return (
    <Box
      w="full"
      h={['150px', '500px']}
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        maxW="1160px"
        h="100%"
        pb={[null, '59px']}
        margin="auto"
        align={['center', 'end']}
        justify={['center', 'start']}
      >
        <Heading
          lineHeight={['42px', '72px']}
          fontWeight="semibold"
          fontSize={['1.75rem', '5xl']}
          color="light.headingsAndText"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}
