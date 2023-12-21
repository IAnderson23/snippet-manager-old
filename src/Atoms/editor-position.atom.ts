import {atom} from "jotai";

export interface EditorPosition {
    line: number
    column: number
}

export const editorPositionAtom = atom<EditorPosition>({line: 1, column: 1});