import {atom} from "jotai";

export interface SortConfig {
    sortBy: string
    isAscending: boolean
}

export const sortConfigAtom = atom<SortConfig>({sortBy: "created", isAscending: false});