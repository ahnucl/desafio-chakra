import { Flex, Image } from '@chakra-ui/react'

/**
 * TODO: Add responsivity
 *
 */

export function Header() {
  return (
    <Flex h="100px" w="1160px" mx="auto" align="center" justify="center">
      <Image src="/images/Logo.svg" />
    </Flex>
  )
}
