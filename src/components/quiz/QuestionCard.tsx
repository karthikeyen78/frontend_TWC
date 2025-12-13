import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import catPawImg from "../../assets/cat-paw.png"
import bestOfLuckImg from "../../assets/best-of-luck.png"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { OptionItem } from "./OptionItem"
import { ProgressBar } from "./ProgressBar"
import type { Question } from "../../data/mockData"

interface QuestionCardProps {
    question: Question
    totalQuestions: number
    currentIndex: number
    selectedAnswer?: string
    onSelectOption: (option: string) => void
    onNext: () => void
    onPrev: () => void
    showPrev: boolean
    isLastQuestion: boolean
}

export function QuestionCard({
    question,
    totalQuestions,
    currentIndex,
    selectedAnswer,
    onSelectOption,
    onNext,
    onPrev,
    showPrev,
    isLastQuestion
}: QuestionCardProps) {
    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-6 relative rounded-[40px] bg-white/30 backdrop-blur-md border border-white/50 shadow-xl my-8">
            {/* Cat Paw Graphic (Positioned relative to Glass Frame) */}
            <motion.div
                className="absolute bottom-[-10px] left-[-10px] md:bottom-12 md:left-2 opacity-100 pointer-events-none -rotate-12 z-20 mix-blend-multiply"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <img src={catPawImg} alt="Cat Paw" className="w-32 md:w-36 opacity-90 drop-shadow-sm" />
                <img
                    src={bestOfLuckImg}
                    alt="Best of Luck"
                    className="absolute -top-10 left-8 w-24 md:w-28 -rotate-12 drop-shadow-sm"
                />
            </motion.div>

            <Card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-16 py-10 min-h-[500px] aspect-[4/3] flex flex-col relative overflow-hidden rounded-[32px] bg-white shadow-none"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <h1
                        className="font-serif italic font-bold tracking-tight text-5xl md:text-6xl mb-6 pb-2"
                        style={{
                            fontFamily: '"Playfair Display", serif',
                            background: 'linear-gradient(to right, #1e293b, #64748b)', // Dark slate to lighter slate/blue fallback
                            backgroundImage: 'linear-gradient(90deg, #1F4E5F 0%, #5C9DC3 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Test Your Knowledge
                    </h1>
                    <div className="inline-block bg-white border border-gray-100 shadow-sm rounded-lg px-4 py-2 text-sm text-secondary">
                        Answer all questions to see your results
                    </div>
                </div>

                {/* Progress Bar */}
                <ProgressBar total={totalQuestions} current={currentIndex} />

                {/* Content Area with Animation */}
                <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={question.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {/* Question Box */}
                            <div className="bg-accent-bg rounded-xl p-8 mb-6 text-center shadow-sm">
                                <h3 className="text-xl md:text-2xl font-medium text-primary">
                                    {question.id}. {question.text}
                                </h3>
                            </div>

                            {/* Options */}
                            <div className="space-y-3">
                                {question.options.map((option) => (
                                    <OptionItem
                                        key={option}
                                        text={option}
                                        selected={selectedAnswer === option}
                                        onClick={() => onSelectOption(option)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 px-4">
                    {/* Placeholder for left side to balance the flex layout since paw is gone */}
                    <div className="w-24"></div>

                    <div className="flex gap-4">
                        {showPrev && (
                            <Button
                                variant="secondary"
                                className="w-12 h-12 p-0 rounded-lg bg-accent-ui/50 hover:bg-accent-ui"
                                onClick={onPrev}
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        )}

                        <Button
                            variant={isLastQuestion ? "primary" : "secondary"}
                            className={isLastQuestion ? "bg-accent-ui text-primary px-8" : "w-12 h-12 p-0 rounded-lg bg-accent-ui/50 hover:bg-accent-ui"}
                            onClick={onNext}
                        >
                            {isLastQuestion ? (
                                "Submit"
                            ) : (
                                <ArrowRight className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
