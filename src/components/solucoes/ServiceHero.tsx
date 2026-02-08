"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroTextReveal } from "@/lib/animations";
import { SERVICE_ICONS } from "@/lib/services-data";
import type { ServiceDetail, ServiceCategory } from "@/lib/types";

interface ServiceHeroProps {
  service: ServiceDetail;
  category: ServiceCategory;
}

export default function ServiceHero({ service, category }: ServiceHeroProps) {
  const Icon = SERVICE_ICONS[service.iconName];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background-dark">
        <div className="absolute top-20 left-10 size-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 size-96 bg-accent-cyan/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-metal-gray mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/solucoes" className="hover:text-white transition-colors">
              Solucoes
            </Link>
            <span>/</span>
            <span className="text-accent-cyan">{category.title}</span>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          {/* Icon */}
          <div className="size-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-8 neon-glow-primary">
            <Icon className="size-8 text-accent-cyan" />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-heading">
            {service.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-metal-gray leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-10">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-metal-gray"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center btn-gradient px-8 py-4 rounded-xl font-bold neon-glow-primary hover:opacity-90 transition-all"
          >
            Solicitar Orcamento
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
