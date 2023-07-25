import type { NextApiRequest, NextApiResponse } from 'next'
import productions from '../../content/productions.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(productions)
  }
}
