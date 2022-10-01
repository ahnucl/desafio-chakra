import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  return (
    <Flex
      maxW="1240px"
      align="center"
      sx={{
        '--swiper-pagination-color': 'colors.highlight',
        '--swiper-pagination-bullet-inactive-color': 'colors.dark.info',
        '--swiper-pagination-bullet-width': '1rem',
        '--swiper-pagination-bullet-height': '1rem',
        '--swiper-navigation-color': 'colors.highlight',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '.swiper-button-next': {
          right: 35,
        },
        '.swiper-button-prev': {
          left: 35,
        },
        '.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet ':
          {
            transition: 'all 0.2s',
            '&:hover': {
              filter: 'opacity(0.7)',
            },
          },
        '.swiper-button-prev, .swiper-button-next': {
          '&::after': {
            fontSize: '1.8rem',
          },
        },
      }}
    >
      <Swiper
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {children}
      </Swiper>
    </Flex>
  )
}
