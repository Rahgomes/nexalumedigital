import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desabilitar SWC minify que pode ter bug com arquivos grandes
  swcMinify: false,
  // Usar Webpack com opções que ajudam com arquivos grandes
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: false, // Desabilitar minificação que causa o erro
    };
    return config;
  },
};

export default nextConfig;
