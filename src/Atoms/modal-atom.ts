import {atom} from "jotai";

import {modalConstructor} from "../Utility/Constructors/modal-constructor.utility"
import {Folder, Fragment, Snippet} from "../Database/database-types";

export interface Modal {
    type: string
    subType: string
    target: Folder | Snippet | Fragment | undefined
}

export const modalAtom = atom<Modal>(modalConstructor.default());