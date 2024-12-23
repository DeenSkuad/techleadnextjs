"use client"
import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)"
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
} 