import { motion } from 'framer-motion'

type Props = {}

export const Caret = (props: Props) => (
  <motion.div
    aria-hidden
    className="bg-primary-500 inline-block h-7 w-0.5"
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
