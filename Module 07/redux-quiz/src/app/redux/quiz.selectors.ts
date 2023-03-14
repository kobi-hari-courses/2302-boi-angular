import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizState, QUIZ_FEATURE_KEY } from "./quiz.state";

export const root = createFeatureSelector<QuizState>(QUIZ_FEATURE_KEY);

export const allQuestions = createSelector(root, val => val.questions);

export const allAnswers = createSelector(root, val => val.answers);

export const currentQuestionIndex = createSelector(allAnswers, val => val.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);



