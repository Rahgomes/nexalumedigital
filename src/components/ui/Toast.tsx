"use client";

import { createContext, useCallback, useContext, useState } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2, XCircle, X } from "lucide-react";

type ToastVariant = "success" | "error";

interface ToastItem {
  id: string;
  variant: ToastVariant;
  title: string;
  description?: string;
}

interface ToastContextValue {
  toast: (options: Omit<ToastItem, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

const variantConfig: Record<
  ToastVariant,
  { icon: typeof CheckCircle2; borderClass: string; iconClass: string }
> = {
  success: {
    icon: CheckCircle2,
    borderClass: "border-accent-green/40",
    iconClass: "text-accent-green",
  },
  error: {
    icon: XCircle,
    borderClass: "border-red-500/40",
    iconClass: "text-red-400",
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((options: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...options, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection="right" duration={5000}>
        {children}

        {toasts.map((t) => {
          const config = variantConfig[t.variant];
          const Icon = config.icon;

          return (
            <ToastPrimitive.Root
              key={t.id}
              open
              onOpenChange={(open) => {
                if (!open) removeToast(t.id);
              }}
              className={`bg-surface-dark border ${config.borderClass} rounded-xl p-4 shadow-lg shadow-black/30 flex items-start gap-3 transition-all duration-300 ease-out data-[state=open]:translate-x-0 data-[state=open]:opacity-100 data-[state=closed]:translate-x-full data-[state=closed]:opacity-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]`}
            >
              <Icon
                className={`size-5 shrink-0 mt-0.5 ${config.iconClass}`}
              />

              <div className="flex-1 min-w-0">
                <ToastPrimitive.Title className="text-sm font-semibold text-white">
                  {t.title}
                </ToastPrimitive.Title>
                {t.description && (
                  <ToastPrimitive.Description className="text-xs text-metal-gray mt-1">
                    {t.description}
                  </ToastPrimitive.Description>
                )}
              </div>

              <ToastPrimitive.Close
                aria-label="Fechar notificacao"
                className="text-metal-gray/60 hover:text-white transition-colors shrink-0 cursor-pointer"
              >
                <X className="size-4" />
              </ToastPrimitive.Close>
            </ToastPrimitive.Root>
          );
        })}

        <ToastPrimitive.Viewport className="fixed top-0 right-0 z-[100] flex flex-col gap-3 p-4 sm:p-6 w-full sm:max-w-sm outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
