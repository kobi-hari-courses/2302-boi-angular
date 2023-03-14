import { createReducer, on } from "@ngrx/store";
import { QuizActions, QuizHelpers } from ".";
import { QUIZ_INITIAL_STATE } from "./quiz.state";

export const QUIZ_REDUCER = createReducer(QUIZ_INITIAL_STATE,
    on(QuizActions.reset, () => QUIZ_INITIAL_STATE),

    on(QuizActions.answerCurrentQuestion, (state, action) => ({
        ...state,
        answers: [...state.answers, {
            userAnswer: action.index,
            isCorrect: QuizHelpers.calcIsAnswerCorrect(state, action.index)
        }]
    }))
);