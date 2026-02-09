"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Detect desktop breakpoint (lg: 1024px)
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const itemsPerView = isDesktop ? 3 : 1;
  const totalSlides = Math.ceil(items.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0) {
        setCurrentIndex(maxIndex);
      } else if (index > maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(index);
      }
    },
    [maxIndex]
  );

  const goNext = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  // Handle swipe gestures
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      goNext();
    } else if (info.offset.x > threshold) {
      goPrev();
    }
  };

  // Auto-rotate every 10 seconds
  useEffect(() => {
    if (isPaused) return;

    const autoRotate = setInterval(() => {
      goNext();
    }, 10000);

    return () => clearInterval(autoRotate);
  }, [goNext, isPaused]);

  // Get visible items for current slide
  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerView;
    return items.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div className="overflow-hidden p-2.5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className={`grid gap-6 md:gap-8 items-stretch ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {getVisibleItems().map((item, idx) =>
              renderItem(item, currentIndex * itemsPerView + idx)
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 size-10 lg:size-12 rounded-full bg-surface-dark/90 border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-surface-dark transition-colors cursor-pointer z-10"
      >
        <ChevronLeft className="size-5 lg:size-6 text-white" />
      </button>

      <button
        onClick={goNext}
        aria-label="Proximo"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 size-10 lg:size-12 rounded-full bg-surface-dark/90 border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-surface-dark transition-colors cursor-pointer z-10"
      >
        <ChevronRight className="size-5 lg:size-6 text-white" />
      </button>

      {/* Pagination dots */}
      <div
        className="flex items-center justify-center gap-2 mt-8"
        role="tablist"
        aria-label="Navegacao do carrossel"
      >
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            role="tab"
            aria-selected={currentIndex === idx}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-8 bg-primary"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
