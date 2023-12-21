import {atom} from "jotai";
import {Snippet} from "../../Database/database-schema";

export const snippetIDAtom = atom<Snippet["id"]>(0);