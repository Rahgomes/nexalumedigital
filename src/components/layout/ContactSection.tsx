"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { diagnosticFormSchema } from "@/lib/schemas";
import type { DiagnosticFormSchema } from "@/lib/schemas";
import { useToast } from "@/components/ui/Toast";

export default function ContactSection() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormSchema>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: DiagnosticFormSchema) => {
    try {
      await axios.post(
        "https://n8n.ramongomessilva.com.br/webhook/contato",
        data,
      );
      toast({
        variant: "success",
        title: "Enviado com sucesso!",
        description:
          "Recebemos sua mensagem. Nossa equipe entrará em contato em até 24 horas.",
      });
      reset();
    } catch {
      toast({
        variant: "error",
        title: "Erro ao enviar",
        description:
          "Ocorreu um problema ao enviar sua mensagem. Tente novamente.",
      });
    }
  };

  const inputStyles =
    "w-full bg-neutral-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-metal-gray/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm";
  const labelStyles = "block text-sm font-medium text-metal-gray mb-1.5";
  const errorStyles = "text-red-400 text-xs mt-1";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-background-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column - Info */}
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="space-y-4">
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <SparklesCore
                    particleDensity={30}
                    minSize={0.5}
                    maxSize={1.5}
                    speed={1.5}
                    particleColor="#00E5FF"
                    className="w-full h-full"
                  />
                </div>
                <span className="relative">Fale Conosco</span>
              </div>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-black text-white font-heading uppercase"
              >
                Fale com um Especialista
              </h2>
              <p className="text-metal-gray text-base sm:text-lg leading-relaxed max-w-lg">
                Preencha o formulário e nossa equipe preparará uma análise
                personalizada para o seu negócio.
              </p>
            </div>
          </motion.div>

          {/* Right column - Form card */}
          <motion.div
            className="rounded-2xl bg-surface-dark border border-white/10 p-6 sm:p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="contact-nome" className={labelStyles}>
                  Nome *
                </label>
                <input
                  id="contact-nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className={inputStyles}
                  {...register("nome")}
                />
                {errors.nome && (
                  <p className={errorStyles}>{errors.nome.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className={labelStyles}>
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  className={inputStyles}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={errorStyles}>{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-telefone" className={labelStyles}>
                    WhatsApp
                  </label>
                  <input
                    id="contact-telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className={inputStyles}
                    {...register("telefone")}
                  />
                  {errors.telefone && (
                    <p className={errorStyles}>{errors.telefone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-empresa" className={labelStyles}>
                    Empresa
                  </label>
                  <input
                    id="contact-empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    className={inputStyles}
                    {...register("empresa")}
                  />
                  {errors.empresa && (
                    <p className={errorStyles}>{errors.empresa.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-mensagem" className={labelStyles}>
                  Mensagem *
                </label>
                <textarea
                  id="contact-mensagem"
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  className={`${inputStyles} resize-none`}
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p className={errorStyles}>{errors.mensagem.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white neon-glow-primary hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
