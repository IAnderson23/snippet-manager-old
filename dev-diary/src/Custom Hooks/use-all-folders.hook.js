import {useAtom} from "jotai";

import {allFoldersAtom} from "../Atoms/Directory/all-folders.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";
import {useEffect} from "react";

function useAllFolders() {
  const [allFolders, setAllFolders] = useAtom(allFoldersAtom);
  const folders = useLiveQuery(() => db.folders.toArray(), [], [])

  useEffect(() => {
    setAllFolders(folders);
  }, [folders])

  return allFolders;
}

export default useAllFolders;