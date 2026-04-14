"use client"

import { motion, type HTMLMotionProps } from "motion/react"
import { type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right"

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
}

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerContainerProps = {
  children: ReactNode
  className?: string
  staggerDelay?: number
  style?: React.CSSProperties
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  style,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
