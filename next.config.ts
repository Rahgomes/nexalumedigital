import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desabilitar Turbopack no build (usa Webpack)
  experimental: {
    // Turbopack apenas em dev, não em build
  },
};

export default nextConfig;
