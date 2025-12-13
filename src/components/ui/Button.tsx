import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    asChild?: boolean
}

// Using motion.button for built-in animation support
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
            secondary: "bg-accent-ui text-primary hover:bg-accent-ui/80",
            outline: "border border-input bg-transparent hover:bg-accent-ui/20 text-primary",
            ghost: "hover:bg-accent-ui/20 text-primary",
        }

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-12 px-6 py-2 text-base",
            lg: "h-14 px-8 text-lg",
        }

        return (
            <motion.button
                ref={ref as any}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...(props as any)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
