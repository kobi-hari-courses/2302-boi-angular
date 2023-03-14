import { Question } from "../models/question.model";
import { QuizState } from "./quiz.state";

export function clacCurrentQuestion(state: QuizState): Question {
    const index = state.answers.length;
    return state.questions[index];
}

export function calcIsAnswerCorrect(state: QuizState, userAnswer: number): boolean {
    const question = clacCurrentQuestion(state);
    return question.correctAnswer === userAnswer;
}