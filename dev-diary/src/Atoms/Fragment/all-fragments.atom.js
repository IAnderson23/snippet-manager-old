import {atom} from "jotai";
import {useLiveQuery} from "dexie-react-hooks";

import {db} from "../../Database/datebase-init";

const allFragments = useLiveQuery(() => db.fragments.toArray(), [], []);

export const allFragmentsAtom = atom(allFragments);