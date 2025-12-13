import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"

interface ResultCardProps {
    score: number
    total: number
    onRetry: () => void
}

export function ResultCard({ score, total, onRetry }: ResultCardProps) {
    const percentage = Math.round((score / total) * 100)

    return (
        <Card className="w-full max-w-2xl mx-auto p-12 flex flex-col items-center justify-center min-h-[400px] text-center bg-surface/95 backdrop-blur">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg mb-8 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 border border-white/50"
            >
                Better Luck Next Time!
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Your Final score is
            </h2>

            <div className="text-8xl font-serif text-primary font-bold mb-12">
                {percentage}<span className="text-4xl align-top">%</span>
            </div>

            <Button onClick={onRetry} size="lg" className="px-12 rounded-full bg-accent-ui text-primary hover:bg-accent-ui/80 font-bold">
                Start Again
            </Button>
        </Card>
    )
}
