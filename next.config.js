/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  basePath: "/rovers-site",
  images: { unoptimized: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/taurusspaceprojects/',
        permanent: false,
        basePath: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/taurus-space/',
        permanent: false,
        basePath: false
      },
    ]
  }
};
module.exports = nextConfig