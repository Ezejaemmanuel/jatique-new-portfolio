/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jwhzs4mj71.ufs.sh',
        pathname: '/f/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
