import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] active:bg-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)]",
        outline:
          "bg-transparent text-foreground hover:bg-secondary border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] active:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] active:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-secondary border-transparent active:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline border-transparent active:border-transparent",
      },
      size: {
        default: "h-8 px-4 py-0",
        sm: "h-7 px-3 py-0 text-xs",
        lg: "h-10 px-6 py-0",
        icon: "h-8 w-8",
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
