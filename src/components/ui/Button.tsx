"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-gradient text-white font-bold neon-glow-primary hover:opacity-90",
  secondary:
    "bg-transparent border border-metal-gray/30 text-white font-bold hover:bg-white/5",
  whatsapp:
    "whatsapp-btn text-white font-bold hover:brightness-110",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon: Icon,
      iconPosition = "right",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2.5
          px-8 py-4 rounded-xl text-base
          transition-all duration-300 cursor-pointer
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon className="size-5" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="size-5" />}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
