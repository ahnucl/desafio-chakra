import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  const showWide = useBreakpointValue({
    base: false,
    md: true,
  })

  const conditionalStyles = showWide
    ? {
        '--swiper-pagination-bullet-width': '1rem',
        '--swiper-pagination-bullet-height': '1rem',
        '.swiper-button-next': {
          right: 35,
        },
        '.swiper-button-prev': {
          left: 35,
        },
        '.swiper-button-prev, .swiper-button-next': {
          '&::after': {
            fontSize: '1.8rem',
          },
        },
      }
    : {
        '--swiper-pagination-bullet-width': '0.5rem',
        '--swiper-pagination-bullet-height': '0.5rem',
        '.swiper-button-next': {
          right: 1,
        },
        '.swiper-button-prev': {
          left: 1,
        },
        '.swiper-button-prev, .swiper-button-next': {
          '&::after': {
            fontSize: '1rem',
          },
        },
      }

  return (
    <Flex
      maxW={['100vw', null, null, null, '1240px']}
      align="center"
      sx={{
        '--swiper-pagination-color': 'colors.highlight',
        '--swiper-pagination-bullet-inactive-color': 'colors.dark.info',
        '--swiper-navigation-color': 'colors.highlight',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet ':
          {
            transition: 'all 0.2s',
            '&:hover': {
              filter: 'opacity(0.7)',
            },
          },
        ...conditionalStyles,
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
