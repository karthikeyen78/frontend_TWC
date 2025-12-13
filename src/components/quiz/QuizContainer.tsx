import { useState } from "react"
import { questions } from "../../data/mockData"
import { QuestionCard } from "./QuestionCard"
import { ResultCard } from "./ResultCard"

export function QuizContainer() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isFinished, setIsFinished] = useState(false)

    const currentQuestion = questions[currentQuestionIndex]
    const totalQuestions = questions.length

    const handleOptionSelect = (option: string) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: option
        }))
    }

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
        } else {
            setIsFinished(true)
        }
    }

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1)
        }
    }

    const handleRetry = () => {
        setAnswers({})
        setCurrentQuestionIndex(0)
        setIsFinished(false)
    }

    const calculateScore = () => {
        let score = 0
        questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                score++
            }
        })
        return score
    }

    if (isFinished) {
        return (
            <ResultCard
                score={calculateScore()}
                total={totalQuestions}
                onRetry={handleRetry}
            />
        )
    }

    return (
        <QuestionCard
            question={currentQuestion}
            totalQuestions={totalQuestions}
            currentIndex={currentQuestionIndex}
            selectedAnswer={answers[currentQuestion.id]}
            onSelectOption={handleOptionSelect}
            onNext={handleNext}
            onPrev={handlePrev}
            showPrev={currentQuestionIndex > 0}
            isLastQuestion={currentQuestionIndex === totalQuestions - 1}
        />
    )
}
