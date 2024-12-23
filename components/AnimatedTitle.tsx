"use client"
import { motion } from 'framer-motion'

const titleVariants = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={titleVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  )
} 