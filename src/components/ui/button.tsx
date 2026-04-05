import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-terminal text-base transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-[hsl(120,100%,30%)] px-4 py-1",
  {
    variants: {
      variant: {
        default: "bg-transparent text-[hsl(120,100%,50%)] hover:bg-[hsl(120,100%,50%)] hover:text-[hsl(120,100%,2%)] hover:shadow-glow border-[hsl(120,100%,40%)]",
        destructive:
          "bg-transparent text-[hsl(0,100%,50%)] hover:bg-[hsl(0,100%,50%)] hover:text-[hsl(120,100%,2%)] border-[hsl(0,100%,40%)]",
        outline:
          "bg-transparent text-[hsl(120,100%,40%)] hover:text-[hsl(120,100%,50%)] border-[hsl(120,100%,25%)]",
        secondary:
          "bg-transparent text-[hsl(120,100%,35%)] hover:text-[hsl(120,100%,50%)] border-[hsl(120,100%,20%)]",
        ghost: "bg-transparent text-[hsl(120,100%,40%)] hover:text-[hsl(120,100%,50%)] border-transparent hover:border-[hsl(120,100%,25%)]",
        link: "text-[hsl(120,100%,50%)] underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-10 px-4 py-1",
        sm: "h-8 px-3 py-0 text-sm",
        lg: "h-12 px-6 py-1 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
