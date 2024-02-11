import { cn } from '@/util/class-names'
import { ComponentProps, useMemo } from 'react'
import { motion } from 'framer-motion'
import { formatPercentage } from '@/util/format-percentage'
import { calculateAccuracyPercentage } from '@/util/calculate-accuracy-percentage'

type Props = {
  errors: number
  totalWords: number
} & ComponentProps<'ul'>

export const Results = ({ className, errors, totalWords }: Props) => {
  const initial = { opacity: 0 }
  const animate = { opacity: 1 }
  const duration = { duration: 0.3 }

  const accuracyPercentage = useMemo(
    () => calculateAccuracyPercentage(errors, totalWords),
    [errors, totalWords]
  )

  return (
    <motion.ul
      className={cn(
        'text-primary-400 flex flex-col items-center space-y-3',
        className
      )}
    >
      <motion.li
        className="text-xl font-semibold"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.0 }}
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}
      >
        Typed: {totalWords}
      </motion.li>
    </motion.ul>
  )
}
