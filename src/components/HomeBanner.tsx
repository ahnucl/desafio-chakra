import { Image } from '@chakra-ui/react'

interface HomeBannerProps {
  showWide: boolean
}
export function HomeBanner({ showWide }: HomeBannerProps) {
  const imgSrc = showWide ? '/images/Banner.svg' : '/images/BannerMobile.svg'

  return <Image src={imgSrc} w="full" />
}
