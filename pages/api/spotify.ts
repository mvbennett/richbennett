import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/dist/server/api-utils'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    redirect(res, 'url', 'https://open.spotify.com/artist/1RMBOy3qTuHdPWNJaopTbS?si=YlAPhHm8T3-Nf7laF-_Qdw')
  }
}
