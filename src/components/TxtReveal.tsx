"use client";
import React, { useRef, useMemo, Children } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export interface TxtRevealProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  staggerDelay?: number;
  threshold?: number;
  duration?: number;
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  variant?: "default" | "muted" | "accent" | "primary";
}

// helper simples para classes
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
} as const;

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const variantClasses = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-500 dark:text-gray-400",
  accent: "text-blue-700 dark:text-blue-300",
  primary: "text-blue-600 dark:text-blue-400",
} as const;

export function TxtReveal({
  children,
  containerClassName,
  textClassName,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  staggerDelay = 0.05,
  threshold = 0.5,
  duration = 0.8,
  springConfig = { damping: 25, stiffness: 100, mass: 1 },
  size = "lg",
  align = "left",
  variant = "default",
}: TxtRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { amount: threshold, once: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [baseRotation, 0, 0]
  );

  // Extrai apenas texto dos children
  const text = useMemo(() => {
    if (typeof children === "string") return children;
    const arr = Children.toArray(children);
    const onlyText = arr
      .map((c) => (typeof c === "string" ? c : ""))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    return onlyText;
  }, [children]);

  // Divide em palavras e espaços
  const splitText = useMemo(() => {
    return text
      .split(/(\s+)/)
      .map((part, index) => ({
        value: part,
        isSpace: /^\s+$/.test(part),
        originalIndex: index,
      }))
      .filter((item) => item.value.length > 0);
  }, [text]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { ...springConfig, duration },
    },
  };

  if (!text) return null;

  return (
    <motion.div
      ref={containerRef}
      style={{ rotate: rotation }}
      className={cx("my-5 transform-gpu", containerClassName)}
    >
      <motion.p
        className={cx(
          "leading-relaxed font-semibold",
          sizeClasses[size],
          alignClasses[align],
          variantClasses[variant],
          textClassName
        )}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {splitText.map((item) =>
          item.isSpace ? (
            <span key={`space-${item.originalIndex}`}>{item.value}</span>
          ) : (
            <motion.span
              key={`word-${item.originalIndex}`}
              className="inline-block"
              variants={wordVariants}
            >
              {item.value}
            </motion.span>
          )
        )}
      </motion.p>
    </motion.div>
  );
}

export default TxtReveal;
