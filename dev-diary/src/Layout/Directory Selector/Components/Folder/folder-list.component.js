import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import useAllFolders from "../../../../Custom Hooks/use-all-folders.hook";
import {addIcon} from "../../../../Assets/svg-icons.asset";
import {menuAtom} from "../../../../Atoms/menu-atom";
import FolderItem from "./folder-item.component";

function FolderList() {
  const setMenu = useSetAtom(menuAtom);
  const allFolders = useAllFolders();

  function onAddHandler() {
    setMenu(menuConstructor.create.folder())
  }

  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Folders</h5>
        <button onClick={onAddHandler}>{addIcon}</button>
      </div>
      <ul>
        {allFolders.map((folder, i) =><FolderItem folder={folder} key={i} />)}
      </ul>
    </div>
  )
}

export default FolderList;