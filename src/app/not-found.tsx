import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Home, Briefcase, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        {/* Background effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number with gradient */}
          <div className="relative mb-8">
            <h1 className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-accent-cyan to-primary bg-clip-text text-transparent animate-pulse">
                404
              </span>
            </h1>
            <div className="absolute inset-0 text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-white/5 blur-xl -z-10">
              404
            </div>
          </div>

          {/* Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-metal-gray text-base sm:text-lg mb-10 max-w-md mx-auto">
            Parece que você se perdeu no ciberespaço. A página que você procura
            não existe ou foi movida.
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group btn-gradient px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide neon-glow-primary hover:opacity-90 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Home className="size-5 group-hover:scale-110 transition-transform" />
              Voltar à Home
            </Link>

            <Link
              href="/solucoes"
              className="group bg-transparent border border-primary/30 hover:border-primary px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white hover:bg-primary/10 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Briefcase className="size-5 group-hover:scale-110 transition-transform" />
              Ver Soluções
            </Link>

            <Link
              href="/especialidades"
              className="group bg-transparent border border-accent-cyan/30 hover:border-accent-cyan px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white hover:bg-accent-cyan/10 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Sparkles className="size-5 group-hover:scale-110 transition-transform" />
              Especialidades
            </Link>
          </div>

          {/* Decorative code snippet */}
          <div className="mt-16 p-4 rounded-lg bg-white/5 border border-white/10 inline-block font-mono text-xs text-metal-gray">
            <span className="text-primary">const</span>{" "}
            <span className="text-accent-cyan">page</span> ={" "}
            <span className="text-red-400">null</span>;{" "}
            <span className="text-metal-gray/50">// 🤔</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
