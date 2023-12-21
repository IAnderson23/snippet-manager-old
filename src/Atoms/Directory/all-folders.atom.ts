import {atom} from "jotai";
import {Folder} from "../../Database/database-schema";

export const allFoldersAtom = atom<Folder[]>([]);