/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
    basePath: "/rovers-site",
    images: { unoptimized: true } ,
  reactStrictMode: true,
async redirects() {
  return [
    {
      source: '/instagram',
      destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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