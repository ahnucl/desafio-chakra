import { Box, Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BackButton } from './BackButton'

/**
 * TODO: Add responsivity
 *
 */

export function Header() {
  const { asPath } = useRouter()

  const showBackButton = asPath !== '/'

  return (
    <Flex h="100px" w="1160px" mx="auto" align="center" justify="center">
      {showBackButton && <BackButton />}

      <Image src="/images/Logo.svg" />
    </Flex>
  )
}
