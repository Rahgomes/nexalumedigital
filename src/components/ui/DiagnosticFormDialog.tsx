"use client";

import { useState, useSyncExternalStore } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { diagnosticFormSchema } from "@/lib/schemas";
import type { DiagnosticFormSchema } from "@/lib/schemas";

const emptySubscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

interface DiagnosticFormDialogProps {
  trigger: React.ReactNode;
}

export default function DiagnosticFormDialog({
  trigger,
}: DiagnosticFormDialogProps) {
  const hydrated = useHydrated();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 300);
    }
  };

  const inputStyles =
    "w-full bg-neutral-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-metal-gray/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm";
  const labelStyles = "block text-sm font-medium text-metal-gray mb-1.5";
  const errorStyles = "text-red-400 text-xs mt-1";

  if (!hydrated) {
    return <>{trigger}</>;
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-dark border border-white/10 p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <Dialog.Close className="absolute top-4 right-4 size-8 rounded-full flex items-center justify-center text-metal-gray hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <X className="size-5" />
            <span className="sr-only">Fechar</span>
          </Dialog.Close>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="size-16 rounded-full bg-accent-green/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="size-8 text-accent-green" />
              </div>
              <Dialog.Title className="text-2xl font-bold text-white mb-3">
                Enviado com sucesso!
              </Dialog.Title>
              <Dialog.Description className="text-metal-gray max-w-sm">
                Recebemos seu diagnostico. Nossa equipe entrara em contato em
                ate 24 horas.
              </Dialog.Description>
              <button
                onClick={() => handleOpenChange(false)}
                className="mt-8 btn-gradient px-8 py-3 rounded-xl font-bold text-sm text-white neon-glow-primary hover:opacity-90 transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-2xl font-bold text-white mb-2">
                Diagnostico Gratuito
              </Dialog.Title>
              <Dialog.Description className="text-metal-gray text-sm mb-8">
                Preencha os dados abaixo e nossa equipe preparara uma analise
                personalizada para o seu negocio.
              </Dialog.Description>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="nome" className={labelStyles}>
                    Nome *
                  </label>
                  <input
                    id="nome"
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
                  <label htmlFor="email" className={labelStyles}>
                    Email *
                  </label>
                  <input
                    id="email"
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
                    <label htmlFor="telefone" className={labelStyles}>
                      Telefone
                    </label>
                    <input
                      id="telefone"
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
                    <label htmlFor="empresa" className={labelStyles}>
                      Empresa
                    </label>
                    <input
                      id="empresa"
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
                  <label htmlFor="mensagem" className={labelStyles}>
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
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
                  className="w-full btn-gradient px-8 py-4 rounded-xl font-bold text-base text-white neon-glow-primary hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Diagnostico"
                  )}
                </button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
