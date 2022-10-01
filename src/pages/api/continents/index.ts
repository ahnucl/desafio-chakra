import { NextApiRequest, NextApiResponse } from 'next'

import { continents } from '../../../utils/data'

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const continentsCall = continents.map(continent => ({
      id: continent.id,
      name: continent.name,
      callPhrase: continent.callPhrase,
      callImage: continent.callImage,
    }))

    return response.status(200).json(continentsCall)
  }

  return response.status(405).json({ error: 'Method not allowed.' })
}
