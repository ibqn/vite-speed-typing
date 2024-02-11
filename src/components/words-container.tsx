import { cn } from '@/util/class-names'
import { type ComponentProps } from 'react'

type Props = {} & ComponentProps<'div'>

export const WordsContainer = (props: Props) => (
  <div
    className={cn(
      'relative mt-3 max-w-xl break-all text-3xl leading-relaxed',
      props.className
    )}
  >
    {props.children}
  </div>
)
