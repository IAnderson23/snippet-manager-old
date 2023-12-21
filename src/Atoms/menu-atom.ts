import {atom} from "jotai";

import {Menu, menuConstructor} from "../Utility/Constructors/menu-constructor.utility"

export const menuAtom = atom<Menu>(menuConstructor.default());