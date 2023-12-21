import {atom} from "jotai";
import {Fragment} from "../../Database/database-schema";

export const fragmentIdAtom = atom<Fragment["id"]>(0);