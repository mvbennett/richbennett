const withWorkbox = require('next-with-workbox')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.ctfassets.net"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const plugins = [
   withWorkbox,
 ]

 module.exports = plugins.reduce((acc, curr) => {
   if (curr.name === 'withWorkbox') {
     return curr(acc, { workbox: { swSrc: 'service-worker.js' } })
   }
   return curr(acc)
 }, nextConfig)

// module.exports = nextConfig
