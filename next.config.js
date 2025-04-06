/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Удаляем output: 'standalone', так как это не нужно для Netlify с @netlify/plugin-nextjs
}

module.exports = nextConfig 