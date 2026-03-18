import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";
// TODO: Importar SOCIAL_LINKS quando os perfis oficiais forem criados
// import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 space-y-6">
            <Link href="/" className="w-fit">
              <Image
                src="/logo-nexalume.png"
                alt="Nexalume"
                width={320}
                height={128}
                className="h-24 md:h-28 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-metal-gray text-sm leading-relaxed max-w-xs">
              Transformando empresas com inteligência artificial e tecnologia
              eficiente.
            </p>
            {/* TODO: Descomentar quando criar perfis oficiais no LinkedIn e Instagram
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
            */}
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h6 className="font-bold text-white mb-6">{group.title}</h6>
              <ul className="space-y-4 text-sm text-metal-gray">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h6 className="font-bold text-white mb-6">Contato</h6>
            <ul className="space-y-4 text-sm text-metal-gray">
              <li className="flex items-start gap-2">
                <Mail className="size-4 text-primary mt-0.5 shrink-0" />
                contato@nexalumedigital.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                São Paulo, BR
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-metal-gray/50">
          <p>
            &copy; 2026 Nexalume Digital Solutions. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
