export interface Question {
    id: number
    text: string
    options: string[]
    correctAnswer: string // Storing string value of answer
}

export const questions: Question[] = [
    {
        id: 1,
        text: "What sound does a cat make?",
        options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
        correctAnswer: "Meow-Meow"
    },
    {
        id: 2,
        text: "What would you probably find in your fridge?",
        options: ["Shoes", "Ice Cream", "Books"],
        correctAnswer: "Ice Cream"
    },
    {
        id: 3,
        text: "How many stars are in the sky?",
        options: ["Two", "Infinite", "One Hundred"],
        correctAnswer: "Infinite"
    },
    {
        id: 4,
        text: "What color are bananas?",
        options: ["Blue", "Yellow", "Red"],
        correctAnswer: "Yellow"
    }
]
