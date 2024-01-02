import {atom} from "jotai";

import {fragmentIdAtom} from "./fragment-id.atom";
import {allFragmentsAtom} from "./all-fragments.atom";
import {fragmentSchema} from "../../Database/database-schema";
import {Fragment} from "../../Database/database-types";


export const fragmentAtom = atom<Fragment>(get => {
  const allFragments: Fragment[] = get(allFragmentsAtom);
  const fragmentID: number = get(fragmentIdAtom);

  return fragmentID ? allFragments.find((fragment)=> fragment.id === fragmentID)! : fragmentSchema;
})