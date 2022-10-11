import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BackButton } from './BackButton'

interface HeaderProps {
  showWide: boolean
}

export function Header({ showWide }: HeaderProps) {
  const { asPath } = useRouter()

  const headerImg = showWide ? '/images/Logo.svg' : '/images/LogoMobile.svg'

  const showBackButton = asPath !== '/'

  return (
    <Flex
      h={['50px', '100px']}
      maxW={['375px', '1160px']}
      mx="auto"
      align="center"
      justify="center"
    >
      {showBackButton && <BackButton />}

      <Image src={headerImg} />
    </Flex>
  )
}
