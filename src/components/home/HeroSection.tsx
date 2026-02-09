"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroTextReveal, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/aceternity/aurora-background";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Aurora Background - hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AuroraBackground showRadialGradient={true} className="!min-h-0 h-full">
          <div />
        </AuroraBackground>
      </div>

      {/* Fallback gradient for mobile */}
      <div className="md:hidden absolute inset-0 hero-gradient z-0" />

      {/* SVG Decorative Lines - Top */}
      <svg
        width="166"
        height="298"
        viewBox="0 0 166 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-x-0 top-0 z-1 aspect-square h-25 w-full md:h-50"
      >
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 1 -108)"
          stroke="url(#heroTopLine0)"
        />
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 34 -108)"
          stroke="url(#heroTopLine1)"
        />
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 67 -108)"
          stroke="url(#heroTopLine2)"
        />
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 100 -108)"
          stroke="url(#heroTopLine3)"
        />
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 133 -108)"
          stroke="url(#heroTopLine4)"
        />
        <line
          y1="-0.5"
          x2="406"
          y2="-0.5"
          transform="matrix(0 1 1 0 166 -108)"
          stroke="url(#heroTopLine5)"
        />
        <defs>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <linearGradient
              key={i}
              id={`heroTopLine${i}`}
              x1="0"
              y1="0.5"
              x2="405"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1FA2FF" />
              <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* SVG Decorative Lines - Bottom */}
      <svg
        width="445"
        height="418"
        viewBox="0 0 445 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-x-0 -bottom-20 z-20 aspect-square h-37.5 w-full md:h-75"
      >
        <line
          x1="139.5"
          y1="418"
          x2="139.5"
          y2="12"
          stroke="url(#heroBotLine0)"
        />
        <line
          x1="172.5"
          y1="418"
          x2="172.5"
          y2="12"
          stroke="url(#heroBotLine1)"
        />
        <line
          x1="205.5"
          y1="418"
          x2="205.5"
          y2="12"
          stroke="url(#heroBotLine2)"
        />
        <line
          x1="238.5"
          y1="418"
          x2="238.5"
          y2="12"
          stroke="url(#heroBotLine3)"
        />
        <line
          x1="271.5"
          y1="418"
          x2="271.5"
          y2="12"
          stroke="url(#heroBotLine4)"
        />
        <line
          x1="304.5"
          y1="418"
          x2="304.5"
          y2="12"
          stroke="url(#heroBotLine5)"
        />
        <path
          d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
          stroke="url(#heroBotPath0)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
          stroke="url(#heroBotPath1)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <defs>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <linearGradient
              key={i}
              id={`heroBotLine${i}`}
              x1={139.5 + i * 33}
              y1="418"
              x2={139.5 + i * 33}
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1FA2FF" />
              <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
            </linearGradient>
          ))}
          <linearGradient
            id="heroBotPath0"
            x1="115"
            y1="390.591"
            x2="-59.1703"
            y2="205.673"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroBotPath1"
            x1="330"
            y1="390.591"
            x2="504.17"
            y2="205.673"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* SVG Corner Paths - Full overlay */}
      <svg
        width="1382"
        height="370"
        viewBox="0 0 1382 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 z-1 h-full w-full"
      >
        <path
          d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0"
          stroke="url(#heroCorner0)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382"
          stroke="url(#heroCorner1)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0"
          stroke="url(#heroCorner2)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382"
          stroke="url(#heroCorner3)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            id="heroCorner0"
            x1="26.41"
            y1="1"
            x2="211.33"
            y2="175.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroCorner1"
            x1="1355.59"
            y1="1"
            x2="1170.67"
            y2="175.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroCorner2"
            x1="26.41"
            y1="369"
            x2="211.33"
            y2="194.83"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroCorner3"
            x1="1355.59"
            y1="369"
            x2="1170.67"
            y2="194.83"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.48" stopColor="#1FA2FF" />
            <stop offset="1" stopColor="#1FA2FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Radial Glow - Left (desktop only) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="807"
        height="797"
        viewBox="0 0 807 797"
        fill="none"
        className="pointer-events-none absolute -left-96 top-0 z-1 hidden h-full w-full md:block"
      >
        <path
          d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
          fill="url(#heroGlowLeft0)"
        />
        <path
          d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
          fill="url(#heroGlowLeft1)"
        />
        <defs>
          <radialGradient
            id="heroGlowLeft0"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(77 15.89) rotate(90.36) scale(869.41 413.35)"
          >
            <stop stopColor="#0D3A6E" />
            <stop offset="0.25" stopColor="#0B2D5A" />
            <stop offset="0.57" stopColor="#0B1C2D" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="heroGlowLeft1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(127.5 -31) rotate(1.98) scale(679.91 715.99)"
          >
            <stop stopColor="#1A4A8A" />
            <stop offset="0.28" stopColor="#122B45" />
            <stop offset="0.57" stopColor="#0B1C2D" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Radial Glow - Right (desktop only) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="551"
        height="295"
        viewBox="0 0 551 295"
        fill="none"
        className="pointer-events-none absolute -right-80 bottom-0 z-1 hidden h-full w-full md:block"
      >
        <path
          d="M118.499 0H532.468L635.375 38.6161L665 194.625L562.093 346H0L24.9473 121.254L118.499 0Z"
          fill="url(#heroGlowRight0)"
        />
        <defs>
          <radialGradient
            id="heroGlowRight0"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(412.5 346) rotate(-91.15) scale(397.58 423.74)"
          >
            <stop stopColor="#1A4A8A" />
            <stop offset="0.25" stopColor="#122B45" />
            <stop offset="0.57" stopColor="#0B1C2D" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center text-center min-h-screen">
        <motion.div
          className="relative z-10 flex flex-col items-center space-y-6 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with Sparkles */}
          <motion.div
            variants={heroTextReveal}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            {/* Sparkles effect */}
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
            <span className="relative">Inovação em IA &amp; Automação</span>
          </motion.div>

          {/* Heading with Text Generate Effect */}
          <motion.h1
            id="hero-heading"
            variants={heroTextReveal}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] text-white font-heading text-center uppercase"
          >
            Transformamos presença digital em{" "}
            <span className="gradient-highlight-text">resultados reais</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroTextReveal}
            className="text-base sm:text-lg lg:text-xl text-metal-gray max-w-2xl leading-relaxed text-center"
          >
            Sistemas inteligentes e interfaces de alta performance projetados
            para escalar seu negócio com o poder da inteligência artificial.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextReveal}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a href="#contact">
              <Button
                variant="primary"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Começar Agora
              </Button>
            </a>
            <a href="#services">
              <Button variant="secondary" className="w-full sm:w-auto">
                Saiba Mais
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
