import { NextApiRequest, NextApiResponse } from 'next'

import { continents } from '../../../utils/data'

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const { id } = request.query

    const routeContinent = continents.find(continent => continent.id === id)

    if (!routeContinent) {
      return response.status(404).json({ error: 'Not found.' })
    }

    return response.status(200).json(routeContinent)
  }

  return response.status(405).json({ error: 'Method not allowed.' })
}
