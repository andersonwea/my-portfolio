/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'andersonwea-portfolio.s3.us-east-2.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
