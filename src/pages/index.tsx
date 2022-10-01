import { Box, Stack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { Banner } from '../components/Banner'
import { CallToAction } from '../components/CallToAction'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

import { api } from '../utils/api'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface ContinentCall {
  id: string
  name: string
  callPhrase: string
  callImage: string
}
interface HomeProps {
  contintentsCall: ContinentCall[]
}

export default function Home({ contintentsCall }: HomeProps) {
  return (
    <Box>
      <Header />

      <Stack gap="80px" align="center" mb="40px">
        <Banner />

        <TravelTypes />

        <CallToAction contintentsCall={contintentsCall} />
      </Stack>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('continents')

  return {
    props: {
      contintentsCall: data,
    },
  }
}
