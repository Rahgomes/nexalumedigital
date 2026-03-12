import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false,
  webpack: (config, { isServer }) => {
    // Desabilitar minimização que causa "Cannot assign to this" em arquivos grandes
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;
