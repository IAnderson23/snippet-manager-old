import {atom} from "jotai";

import {popupConstructor} from "../Utility/Constructors/popup-constructor.utility"

export const popupAtom = atom(popupConstructor.default);