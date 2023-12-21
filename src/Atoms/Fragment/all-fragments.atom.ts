import {atom} from "jotai";
import {Fragment} from "../../Database/database-schema";

export const allFragmentsAtom= atom<Fragment[]>([]);