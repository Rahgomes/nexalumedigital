"use client";

import { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 2,
  speed = 2,
  particleColor = "var(--color-accent-cyan)",
  particleDensity = 100,
}: SparklesCoreProps) => {
  const generatedId = useId();
  const sparkleId = id || generatedId;
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 2 + speed,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, [particleDensity, minSize, maxSize, speed]);

  return (
    <div
      id={sparkleId}
      className={cn("relative h-full w-full", className)}
      style={{ background }}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
