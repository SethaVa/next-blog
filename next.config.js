/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["https://www.allthetests.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
