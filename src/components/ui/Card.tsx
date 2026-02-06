"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import type { ServiceCardData } from "@/lib/types";

interface ServiceCardProps {
  service: ServiceCardData;
  isHighlighted?: boolean;
}

export default function ServiceCard({
  service,
  isHighlighted = false,
}: ServiceCardProps) {
  const { icon: Icon, title, description, features } = service;

  return (
    <motion.div
      variants={staggerItem}
      className={`
        group p-8 rounded-xl card-hover-gradient transition-all duration-500
        h-full min-h-[380px] md:min-h-[420px] flex flex-col
        ${
          isHighlighted
            ? "neon-border-cyan"
            : "border border-white/5 hover:border-accent-cyan/40"
        }
      `}
    >
      <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shrink-0">
        <Icon className="size-7 text-accent-cyan" />
      </div>

      <h3 className="text-xl font-bold mb-4 text-white shrink-0">{title}</h3>

      <p className="text-metal-gray leading-relaxed mb-6 shrink-0">{description}</p>

      <ul className="space-y-3 mt-auto">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-metal-gray/80"
          >
            <CheckCircle className="size-4 text-accent-cyan shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
