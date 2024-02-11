import { ComponentProps, useRef } from 'react'
import { RotateCw } from 'lucide-react'
import { cn } from '@/util/class-names'

type Props = {
  onRestart: () => void
} & ComponentProps<'button'>

export const RestartButton = ({
  className,
  onRestart,
  ...otherProps
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    buttonRef.current?.blur()
    onRestart()
  }

  return (
    <button
      tabIndex={-1}
      ref={buttonRef}
      onClick={handleClick}
      {...otherProps}
      className={cn('block rounded px-8 py-2 hover:bg-slate-700/50', className)}
    >
      <RotateCw className="h-6 w-6" />
    </button>
  )
}
