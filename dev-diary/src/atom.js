import {atom} from "jotai";

import directoryConstructor from "./Utility/Constructors/directory-constructor.utility";
import popupConstructor from "./Utility/Constructors/popup-constructor.utility";

export const directoryAtom = atom(directoryConstructor.default);

export const folderAtom = atom({})
export const allFoldersAtom = atom([]);

export const snippetAtom = atom({});
export const snippetIDAtom = atom(0);
export const allSnippetsAtom = atom([]);

export const fragmentAtom = atom({});
export const fragmentIDAtom = atom(0);
export const allFragmentsAtom = atom([]);

export const userQueryAtom = atom("");

export const popupAtom = atom(popupConstructor.default);

export const cmPositionAtom = atom({});
