import { z } from "zod";

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
      (val) => !val || /^[\d\s()+-]{8,20}$/.test(val),
      "Formato de telefone invalido"
    ),
  empresa: z
    .string()
    .max(100, "Nome da empresa deve ter no maximo 100 caracteres")
    .optional(),
  mensagem: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(500, "Mensagem deve ter no maximo 500 caracteres"),
});

export type DiagnosticFormSchema = z.infer<typeof diagnosticFormSchema>;
