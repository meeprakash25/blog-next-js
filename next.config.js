/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        hostname: "admin.currentchart.online",
        protocol: "https",
      },
    ],
  },
  /*  experimental: {
    serverActions: true,
  }, */
};

module.exports = nextConfig;
