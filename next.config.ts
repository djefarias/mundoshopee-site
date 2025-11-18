import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mundoshopeestorage.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cf.shopee.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
