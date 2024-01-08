/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
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
