import {useAtom} from "jotai";

import {folderListAtom} from "../Atoms/Directory/folder-list.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";

function useFolderList() {
  const [folderList, setFolderList] = useAtom(folderListAtom);

  const newList = useLiveQuery(() => db.folders.toArray(), [], [])

  setFolderList(newList);

  return folderList;
}

export default useFolderList;