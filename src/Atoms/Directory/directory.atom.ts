import {atom} from "jotai";

import {Directory, directoryConstructor} from "../../Utility/Constructors/directory-constructor.utility";

export const directoryAtom = atom<Directory>(directoryConstructor.default());