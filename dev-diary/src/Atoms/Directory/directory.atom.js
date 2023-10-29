import {atom} from "jotai";

import {directoryConstructor} from "../../Utility/Constructors/directory-constructor.utility";

export const directoryAtom = atom(directoryConstructor.default);