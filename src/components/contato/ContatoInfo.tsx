"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CONTACT_CHANNELS } from "@/lib/constants";

export default function ContatoInfo() {
  return (
    <section className="py-16 md:py-24 bg-surface-dark/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const Wrapper = channel.href ? "a" : "div";
            const wrapperProps = channel.href
              ? {
                  href: channel.href,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div key={channel.title} variants={staggerItem}>
                <Wrapper
                  {...wrapperProps}
                  className="block rounded-2xl border border-white/10 bg-surface-dark/50 p-6 hover:border-primary/30 transition-all duration-300 group h-full"
                >
                  <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-metal-gray text-sm">{channel.detail}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
