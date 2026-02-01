import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface DifferentialData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CaseCardData {
  metric: string;
  client: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface DiagnosticFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}
