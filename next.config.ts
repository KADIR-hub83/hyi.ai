import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "me7aitdbxq.ufs.sh",
      },
    ],
  },
};

module.exports = nextConfig;
