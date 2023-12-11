import {isEqual} from "lodash";
import {useAtom, useAtomValue, useSetAtom} from "jotai";

import {directoryConstructor} from "../../../../../Utility/Constructors/directory-constructor.utility";
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {directoryAtom} from "../../../../../Atoms/Directory/directory.atom";
import {deleteFolder} from "../../../../../Database/CRUD/folder.crud";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function DeleteFolderMenu() {
  const [directory, setDirectory] = useAtom(directoryAtom);
  const setMenu = useSetAtom(menuAtom);
  const {target: folder} = useAtomValue(menuAtom);

  function deleteHandler() {
    deleteFolder(folder.id)
    if (isEqual(directory, {type: "folder", target: folder.id}))
      setDirectory(directoryConstructor.default);
    setMenu(menuConstructor.default);
  }

  function cancelHandler() {
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h2>Are you sure you want to permanently remove {folder.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default DeleteFolderMenu;