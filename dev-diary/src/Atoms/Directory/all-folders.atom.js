import {atom} from "jotai";
import {useLiveQuery} from "dexie-react-hooks";

import {db} from "../../Database/datebase-init";

const allFolders = useLiveQuery(() => db.folders.toArray(), [], []);

export const allFoldersAtom = atom(allFolders);