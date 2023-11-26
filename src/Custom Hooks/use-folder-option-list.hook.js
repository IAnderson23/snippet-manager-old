import {useAtomValue} from "jotai";
import {allFoldersAtom} from "../Atoms/Directory/all-folders.atom";

function useFolderOptionList() {
  const allFolders = useAtomValue(allFoldersAtom);

  return allFolders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)
}

export default useFolderOptionList;