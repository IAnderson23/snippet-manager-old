import {atom} from "jotai";
import {Snippet} from "../../Database/database-schema";

export const recentSnippetsAtom = atom<Snippet[]>([])