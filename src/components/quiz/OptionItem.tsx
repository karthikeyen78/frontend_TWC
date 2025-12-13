import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface OptionItemProps {
    text: string
    selected?: boolean
    onClick: () => void
}

export function OptionItem({ text, selected, onClick }: OptionItemProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.01, backgroundColor: "#e0f2fe" }} // accent-bg color
            whileTap={{ scale: 0.99 }}
            onClick={onClick}
            className={cn(
                "w-full py-6 px-4 rounded-xl text-center text-lg font-medium transition-all duration-200 border-2",
                selected
                    ? "border-primary bg-accent-ui/50 shadow-md"
                    : "border-transparent bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-accent-ui/30",
                "text-primary"
            )}
        >
            {text}
        </motion.button>
    )
}
