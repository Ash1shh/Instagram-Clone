/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com","cloudflare-ipfs.com"],
  }
};

module.exports = nextConfig;
