export interface ProgressViewModel {
    readonly items: ProgressVmItem[];
}

export interface ProgressVmItem {
    readonly status: ProgressItemStatus
}

export type ProgressItemStatus = 'Empty' | 'Correct' | 'Wrong';