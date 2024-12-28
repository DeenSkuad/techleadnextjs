"use client"
import { motion } from 'framer-motion'

export const AnimatedDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div 
      className="text-xl text-slate-300 max-w-2xl mx-auto text-center mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
} 