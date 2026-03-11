import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // Otimizações de memória para build
  experimental: {
    // Limita workers paralelos
    cpus: 2,
  },
};

export default nextConfig;
