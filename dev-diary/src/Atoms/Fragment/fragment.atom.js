import {atom} from "jotai";

import {fragmentIdAtom} from "./fragment-id.atom";
import {fragmentListAtom} from "./fragment-list.atom";

export const fragmentAtom = atom(get => {
  let allFragments = get(fragmentListAtom);
  let fragmentID = get(fragmentIdAtom);

  return fragmentID ? allFragments.find(fragment => fragment.id === fragmentID) : {};
})