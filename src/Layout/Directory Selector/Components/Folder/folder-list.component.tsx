import {useSetAtom} from "jotai";
import Icon from '@mdi/react';
import {mdiPlus} from '@mdi/js';

import {modalConstructor} from "../../../../Utility/Constructors/modal-constructor.utility";
import useAllFolders from "../../../../Custom Hooks/use-all-folders.hook";
import {modalAtom} from "../../../../Atoms/modal-atom";
import FolderItem from "./folder-item.component";


function FolderList() {
  const setModal = useSetAtom(modalAtom);
  const allFolders = useAllFolders();

  function onAddHandler() {
      setModal(modalConstructor.create.folder())
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