import {atom} from "jotai";

import {fragmentIdAtom} from "./fragment-id.atom";
import {allFragmentsAtom} from "./all-fragments.atom";

export const fragmentAtom = atom(get => {
  let allFragments = get(allFragmentsAtom);
  let fragmentID = get(fragmentIdAtom);

  return fragmentID ? allFragments.find(fragment => fragment.id === fragmentID) : {};
})