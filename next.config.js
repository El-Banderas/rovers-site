/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  basePath: "/rovers-site",
  images: { unoptimized: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: 'https://el-banderas.github.io/rovers-site/instagram',
        destination: 'https://www.instagram.com/taurusspaceprojects/',
        permanent: false,
        basePath: false
      },
      {
        source: 'https://el-banderas.github.io/rovers-site/linkedin',
        destination: 'https://www.linkedin.com/company/taurus-space/',
        permanent: false,
        basePath: false
      },
    ]
  }
};
module.exports = nextConfig