import { ALL_QUESTIONS } from "../models/all-questions";
import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export const QUIZ_FEATURE_KEY = 'quiz';

export interface QuizState {
    readonly questions: Question[];
    readonly answers: Answer[];
}

export const QUIZ_INITIAL_STATE : QuizState = {
    questions: ALL_QUESTIONS,
    answers: []
}