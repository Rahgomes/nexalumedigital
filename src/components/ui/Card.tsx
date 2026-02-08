"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import type { ServiceCardData } from "@/lib/types";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/card-3d";

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
    <CardContainer containerClassName="h-full w-full">
      <CardBody className="h-full w-full">
        <motion.div
          variants={staggerItem}
          className={`
            group p-8 rounded-xl card-hover-gradient transition-all duration-500
            h-full min-h-95 md:min-h-105 flex flex-col
            ${
              isHighlighted
                ? "neon-border-cyan"
                : "border border-white/5 hover:border-accent-cyan/40"
            }
          `}
        >
          <CardItem translateZ={50} className="shrink-0">
            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Icon className="size-7 text-accent-cyan" />
            </div>
          </CardItem>

          <CardItem translateZ={40} className="shrink-0">
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          </CardItem>

          <CardItem translateZ={30} className="shrink-0">
            <p className="text-metal-gray leading-relaxed mb-6">{description}</p>
          </CardItem>

          <CardItem translateZ={20} className="mt-auto w-full">
            <ul className="space-y-3">
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
          </CardItem>
        </motion.div>
      </CardBody>
    </CardContainer>
  );
}
