import { Box, Flex, Heading } from '@chakra-ui/react'

interface ContinentBannerProps {
  bgImage: string
  title: string
}

export function ContinentBanner({ title, bgImage }: ContinentBannerProps) {
  return (
    <Box
      w="full"
      h="500px"
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex maxW="1160px" h="100%" pb="59px" margin="auto" align="end">
        <Heading
          lineHeight="72px"
          fontWeight="semibold"
          fontSize="5xl"
          color="light.headingsAndText"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}
