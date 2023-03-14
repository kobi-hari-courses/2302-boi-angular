import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Answer } from "../models/answer.model";
import { QuizState, QUIZ_FEATURE_KEY } from "./quiz.state";

export const root = createFeatureSelector<QuizState>(QUIZ_FEATURE_KEY);

export const allQuestions = createSelector(root, val => val.questions);

export const allAnswers = createSelector(root, val => val.answers);

export const currentQuestionIndex = createSelector(allAnswers, val => val.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);

export const isDone = createSelector(allQuestions, allAnswers, (q, a) => q.length == a.length);

export const correctCount = createSelector(allAnswers, all => all.filter(a => a.isCorrect).length);

export const score = createSelector(allQuestions, correctCount, (all, correct) => correct / all.length);
