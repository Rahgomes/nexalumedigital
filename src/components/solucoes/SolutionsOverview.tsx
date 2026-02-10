"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { scrollToContact } from "@/lib/utils";
import { SERVICE_CATEGORIES, SERVICE_ICONS } from "@/lib/services-data";

export default function SolutionsOverview() {
  return (
    <section className="py-20 lg:py-32 bg-background-dark">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
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
            <span className="relative">Nossas Soluções</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading mb-6 uppercase">
            Tecnologia que{" "}
            <span className="gradient-highlight-text">transforma</span> negócios
          </h1>
          <p className="text-metal-gray text-lg leading-relaxed">
            Oferecemos soluções completas de tecnologia para impulsionar o
            crescimento da sua empresa. Do desenvolvimento web à inteligência
            artificial.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-black text-white font-heading uppercase">
                  {category.title}
                </h2>
                <p className="text-metal-gray mt-1">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service) => {
                  const Icon = SERVICE_ICONS[service.iconName];
                  return (
                    <motion.div key={service.slug} variants={staggerItem}>
                      <Link
                        href={`/solucoes/${service.slug}`}
                        className="group block h-full"
                      >
                        <div className="h-full rounded-2xl bg-surface-dark border border-white/10 p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          {/* Icon */}
                          <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                            <Icon className="size-7 text-primary group-hover:text-accent-cyan transition-colors" />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-metal-gray text-sm leading-relaxed mb-4">
                            {service.shortDescription}
                          </p>

                          {/* Features Preview */}
                          <ul className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-metal-gray"
                              >
                                <span className="size-1.5 rounded-full bg-accent-cyan shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* CTA */}
                          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:text-accent-cyan transition-colors">
                            Saiba mais
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-metal-gray mb-6">
            Não sabe qual solução é ideal para você?
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center btn-gradient px-8 py-4 rounded-xl font-bold neon-glow-primary hover:opacity-90 transition-all"
          >
            Fale com um Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
