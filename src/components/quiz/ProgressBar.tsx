import { cn } from "../../lib/utils"

interface ProgressBarProps {
    total: number
    current: number
}

export function ProgressBar({ total, current }: ProgressBarProps) {
    // Generate array of length 'total'
    const segments = Array.from({ length: total }, (_, i) => i)

    return (
        <div className="flex gap-2 w-full max-w-sm mx-auto mb-8">
            {segments.map((idx) => (
                <div
                    key={idx}
                    className={cn(
                        "h-2.5 flex-1 rounded-full transition-colors duration-300",
                        idx <= current ? "bg-primary" : "bg-gray-200"
                    )}
                />
            ))}
        </div>
    )
}
