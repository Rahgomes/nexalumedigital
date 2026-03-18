import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  // Headers para controle de cache
  async headers() {
    return [
      {
        // Páginas HTML - cache curto, revalidar sempre
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // Assets estáticos com hash - cache longo (já versionados)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Imagens e fontes - cache médio
        source: "/:path*.(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
