import {Atom, atom} from "jotai";

import {fragmentIdAtom} from "./fragment-id.atom";
import {allFragmentsAtom} from "./all-fragments.atom";
import {Fragment, fragmentSchema} from "../../Database/database-schema";

export const fragmentAtom: Atom<Fragment> = atom(get => {
  let allFragments: Fragment[] = get(allFragmentsAtom);
  let fragmentID = get(fragmentIdAtom);

  return fragmentID ? allFragments.find((fragment: Fragment)=> fragment.id === fragmentID) : fragmentSchema;
})