import {useSetAtom} from "jotai";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import useAllFolders from "../../../../Custom Hooks/use-all-folders.hook";
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
        <button onClick={onAddHandler}>
          <Icon path={mdiPlus} size={1} />
        </button>
      </div>
      <ul className={"directory-list"}>
        {allFolders.map((folder, index) => <FolderItem folder={folder} key={index} />)}
      </ul>
    </div>
  )
}

export default FolderList;