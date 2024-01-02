import {useAtom} from "jotai";

import {allFoldersAtom} from "../Atoms/Directory/all-folders.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";
import {useEffect} from "react";
import {Folder} from "../Database/database-types";


function useAllFolders(): Folder[] {
  const [allFolders, setAllFolders] = useAtom(allFoldersAtom);
  const folders: Folder[] | undefined = useLiveQuery<Folder[]>(() => db.folders.toArray(), [])

  useEffect(() => {
    if (folders) setAllFolders(folders);
  }, [folders])

return allFolders;
}

export default useAllFolders;