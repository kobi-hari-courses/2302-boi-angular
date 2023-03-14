import { Answer } from "src/app/models/answer.model";
import { Question } from "src/app/models/question.model";
import { ProgressItemStatus, ProgressViewModel, ProgressVmItem } from "./progress.vm";

export function buildViewModel(questions: Question[], answers: Answer[]): ProgressViewModel {
    const items: ProgressVmItem[] = questions.map((question, index) => ({
        status: answerStatus(answers, index)
    }));
    return {
        items
    };
}

export function answerStatus(answers: Answer[], index: number): ProgressItemStatus {
    if (answers.length <= index) return 'Empty';
    return answers[index].isCorrect ? 'Correct' : 'Wrong';
}