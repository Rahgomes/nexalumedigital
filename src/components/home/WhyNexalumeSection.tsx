"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { DIFFERENTIALS } from "@/lib/constants";

const GRID_HIGHLIGHTS = [
  [
    { x: 180, y: 80 },
    { x: 160, y: 60 },
    { x: 180, y: 60 },
    { x: 140, y: 120 },
    { x: 200, y: 80 },
  ],
  [
    { x: 200, y: 100 },
    { x: 140, y: 60 },
    { x: 180, y: 120 },
    { x: 200, y: 20 },
    { x: 200, y: 120 },
  ],
  [
    { x: 180, y: 60 },
    { x: 160, y: 80 },
    { x: 140, y: 40 },
    { x: 140, y: 60 },
    { x: 160, y: 60 },
  ],
];

export default function WhyNexalumeSection() {
  return (
    <section
      id="why"
      className="py-16 md:py-24 bg-surface-dark/30 border-y border-white/5"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.h2
          id="why-heading"
          className="text-center text-2xl sm:text-3xl md:text-4xl font-black mb-10 md:mb-16 text-white font-heading uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que a Nexalume?
        </motion.h2>

        <motion.div
          className="border border-primary/20 rounded-lg overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === DIFFERENTIALS.length - 1;
              const patternId = `grid-pattern-${index}`;

              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className={`group/card relative overflow-hidden p-10 transition-all duration-300 hover:shadow-[inset_6px_8px_20px_0px_#103a5c] ${
                    !isLast
                      ? "border-b border-primary/20 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  {/* Grid pattern background */}
                  <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full mask-[linear-gradient(white,transparent)]">
                    <div className="absolute inset-0 bg-linear-to-r from-surface-dark/30 to-primary-dark/30 opacity-100 mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full mix-blend-overlay"
                        style={{
                          fill: "rgba(31, 162, 255, 0.1)",
                          stroke: "rgba(31, 162, 255, 0.1)",
                        }}
                      >
                        <defs>
                          <pattern
                            id={patternId}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                            x="-12"
                            y="4"
                          >
                            <path d="M.5 20V.5H20" fill="none" />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill={`url(#${patternId})`}
                        />
                        <svg x="-12" y="4" className="overflow-visible">
                          {GRID_HIGHLIGHTS[index].map((rect, i) => (
                            <rect
                              key={i}
                              strokeWidth="0"
                              width="21"
                              height="21"
                              x={rect.x}
                              y={rect.y}
                            />
                          ))}
                        </svg>
                      </svg>
                    </div>
                  </div>

                  {/* Corner fold */}
                  <div className="absolute right-0 top-0 h-10 w-10 overflow-hidden border-b border-l border-primary/20 bg-background-dark shadow-[-3px_4px_9px_0px_rgba(31,162,255,0.2)] transition duration-200 group-hover/card:-translate-y-14 group-hover/card:translate-x-14">
                    <div className="absolute left-0 top-0 h-px w-[141%] origin-top-left rotate-45 bg-primary/20" />
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-surface-dark to-background-dark p-1">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-linear-to-b from-primary to-primary-dark">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-base text-metal-gray text-balance leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
