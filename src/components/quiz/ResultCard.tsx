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
            <div className="bg-white rounded-full px-6 py-2 shadow-sm mb-8 text-sm font-medium text-secondary">
                Keep Learning!
            </div>

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
