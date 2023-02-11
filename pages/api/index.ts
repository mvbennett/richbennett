import type { NextApiRequest, NextApiResponse } from 'next'
// import emailjs from '@emailjs/browser'
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {

  } else if (req.method === 'GET') {
    res.status(200).json({message: 'No API here bud.'})
  }
}
