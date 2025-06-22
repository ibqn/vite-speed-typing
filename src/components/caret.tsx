import { motion } from 'motion/react'

export const Caret = () => (
  <motion.div
    aria-hidden="true"
    className="bg-primary-500 -mb-1 inline-block h-8 w-0.5"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 1 }}
    transition={{
      repeat: Infinity,
      ease: 'easeInOut',
      duration: 0.8,
    }}
  />
)
