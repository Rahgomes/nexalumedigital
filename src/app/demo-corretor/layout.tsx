import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zona Oeste Imóveis | Encontre seu imóvel ideal",
  description: "Os melhores apartamentos e casas em Pinheiros, Vila Madalena, Perdizes, Lapa e região da Zona Oeste de São Paulo.",
  robots: "noindex, nofollow", // Não indexar página demo
};

export default function DemoCorretorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout independente sem header/footer/widgets do Nexa Lume
  return <>{children}</>;
}
