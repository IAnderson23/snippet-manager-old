import {atom} from "jotai";

import {directoryConstructor} from "../../Utility/Constructors/directory-constructor.utility";

export interface Directory {
    type: string
    target: number | string
}

export const directoryAtom = atom<Directory>(directoryConstructor.default());