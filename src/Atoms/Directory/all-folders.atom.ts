import {atom} from "jotai";
import {Folder} from "../../Database/database-types";

export const allFoldersAtom = atom<Folder[]>([]);