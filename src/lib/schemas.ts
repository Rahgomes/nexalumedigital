import { z } from "zod";

// Regex para telefone brasileiro: (XX) 9XXXX-XXXX ou variações
const phoneRegex = /^\(?[1-9]{2}\)?\s?9?\d{4}[-\s]?\d{4}$/;

export const diagnosticFormSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no maximo 100 caracteres"),
  email: z
    .string()
    .min(1, "Email e obrigatorio")
    .email("Formato de email invalido"),
  telefone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true; // Opcional
        const cleaned = val.replace(/\D/g, "");
        return cleaned.length >= 10 && cleaned.length <= 11 && phoneRegex.test(val);
      },
      "Telefone invalido. Use formato: (11) 99999-9999"
    ),
  empresa: z
    .string()
    .max(100, "Nome da empresa deve ter no maximo 100 caracteres")
    .optional(),
  mensagem: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(500, "Mensagem deve ter no maximo 500 caracteres"),
  // Honeypot - campo oculto anti-bot
  website: z.string().max(0, "").optional(),
});

export type DiagnosticFormSchema = z.infer<typeof diagnosticFormSchema>;
