import {atom} from "jotai";

import {menuConstructor} from "../Utility/Constructors/menu-constructor.utility"

export const menuAtom = atom(menuConstructor.default);