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
    // const message = req.body.data
    // const from_name = message.from_name
    // const phone = message.phone
    // const reply_to = message.reply_to
    // const content = message.content

    // let feedback = ''
    // emailjs.send(
    //   process.env.SERVICE_ID,
    //   process.env.TEMPLATE_ID,
    //   {from_name, phone, reply_to, content},
    //   process.env.EMAIL_KEY
    // )
    // .then(() => {
    //   feedback = `Success, ${from_name}'s message was sent!`
    // })
    // .catch((err: any) => {
    //   console.log(err);

    //   feedback = err
    // })
    // .then(
    //   res.status(200).json({message: feedback})
    // )

  } else if (req.method === 'GET') {
    res.status(200).json({message: 'No API here bud.'})
  }
}
