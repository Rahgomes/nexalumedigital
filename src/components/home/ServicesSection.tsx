"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";
import type { ServiceCardData } from "@/lib/types";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 bg-background-dark"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="space-y-4">
            <h3 className="text-accent-cyan font-bold tracking-[0.2em] uppercase text-sm">
              Nossas Solucoes
            </h3>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-white font-heading">
              O que fazemos
            </h2>
          </div>
          <p className="text-metal-gray max-w-md">
            Abordagem 360&deg; para modernizar sua infraestrutura e acelerar o
            crescimento digital de ponta a ponta.
          </p>
        </motion.div>

        {/* Service Cards Carousel */}
        <Carousel
          items={SERVICES}
          renderItem={(service: ServiceCardData, index: number) => (
            <ServiceCard
              key={service.title}
              service={service}
              isHighlighted={index === 0}
            />
          )}
        />
      </div>
    </section>
  );
}
