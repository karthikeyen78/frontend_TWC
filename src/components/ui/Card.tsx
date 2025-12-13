import * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => (
        <motion.div
            ref={ref}
            className={cn(
                "rounded-[32px] border-none bg-surface/90 backdrop-blur-sm text-card-foreground shadow-card",
                className
            )}
            {...props}
        />
    )
)
Card.displayName = "Card"

export { Card }
