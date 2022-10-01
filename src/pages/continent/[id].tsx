import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'
import { api } from '../../utils/api'

interface Info {
  id: number
  description: string
  count: number
}

interface Plus100City {
  id: number
  city: string
  country: string
  flag: string
}
interface ContinentProps {
  name: string
  description: string
  callImage: string
  pageImage?: string
  info: Info[]
  plus100Cities: Plus100City[]
}

export default function Continent({
  name,
  description,
  callImage,
  pageImage,
  info,
  plus100Cities,
}: ContinentProps) {
  return (
    <Box>
      <Header />
      <ContinentBanner bgImage={pageImage || callImage} title={name} />
      <h1>Continent</h1>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { id } = params! // Erro por conta da parte do "| undefined"

  const { data } = await api.get(`/continents/${id}`)

  return {
    props: data,
  }
}
