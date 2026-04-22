import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small'
  weight?: 'normal' | 'medium' | 'bold' | 'black'
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', weight = 'normal', ...props }, ref) => {
    const Component = variant
    
    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      black: 'font-black',
    }

    const variants = {
      h1: 'text-4xl md:text-5xl font-headline tracking-tight',
      h2: 'text-3xl md:text-4xl font-headline tracking-tight',
      h3: 'text-2xl md:text-3xl font-headline tracking-tight',
      h4: 'text-xl md:text-2xl font-headline tracking-tight',
      p: 'text-base leading-relaxed',
      span: 'text-base',
      small: 'text-xs uppercase tracking-widest',
    }

    return (
      <Component
        ref={ref as any}
        className={cn(variants[variant], weights[weight], className)}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography }
