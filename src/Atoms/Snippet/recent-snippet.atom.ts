import {atom} from "jotai";
import {Snippet} from "../../Database/database-types";


export const recentSnippetsAtom = atom<Snippet[]>([])