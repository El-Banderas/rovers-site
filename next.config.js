/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
    basePath: "/rovers-site",
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
      destination: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
      permanent: false,
      basePath: false
    },
  ]
}
};
export default nextConfig;
