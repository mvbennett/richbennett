import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200)
    redirect('https://open.spotify.com/artist/1RMBOy3qTuHdPWNJaopTbS?si=YlAPhHm8T3-Nf7laF-_Qdw')
  }
}
