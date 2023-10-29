import {atom} from "jotai";
import {useLiveQuery} from "dexie-react-hooks";

import {db} from "../../Database/datebase-init";

const allSnippets = useLiveQuery(() => db.snippets.toArray(), [], []);

export const allSnippetsAtom = atom(allSnippets);