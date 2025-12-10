import React, { forwardRef, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { motion, type MotionProps } from 'framer-motion'

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'> & MotionProps & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, ...props },
    ref,
  ) => {
    const variants = {
      primary:
        'bg-sage-300 text-white hover:bg-sage-400 shadow-md hover:shadow-lg',
      secondary: 'bg-sand-200 text-sage-600 hover:bg-sand-300',
      outline: 'border-2 border-sage-300 text-sage-600 hover:bg-sage-50',
      ghost: 'text-sage-600 hover:bg-sage-50 hover:text-sage-700',
    }
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage-300 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)
Button.displayName = 'Button'
export { Button }
