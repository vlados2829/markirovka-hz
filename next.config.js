/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    // Отключаем все экспериментальные функции
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Добавляем настройки для статической сборки
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Отключаем оптимизацию CSS
  webpack: (config, { isServer }) => {
    // Отключаем critters для решения проблемы сборки
    if (!isServer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
      );
    }
    return config;
  }
}

module.exports = nextConfig 