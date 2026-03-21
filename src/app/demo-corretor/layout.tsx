import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa Demo Imóveis | Encontre seu imóvel ideal",
  description: "Os melhores apartamentos e casas em São Paulo e Grande SP. Demo de imobiliária com IA.",
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
