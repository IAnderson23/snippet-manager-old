import Icon from '@mdi/react';
import {useAtom} from "jotai";
import {mdiFolderOpenOutline, mdiFolderOutline} from '@mdi/js';

import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import FolderActionsDropdown from "./folder-actions.component";
import {Folder} from "../../../../Database/database-types";

function FolderItem({folder}: {folder: Folder}) {
  const [directory, setDirectory] = useAtom(directoryAtom)

  function activeChecker(target: number) {
    return directory.type === "folder" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target: number) {
    setDirectory(directoryConstructor.folder(target))
  }

  return (
    <li key={folder.id} className={"directory-item " + activeChecker(folder.id!)}>
      <div className={"item-header"} onClick={() => onClickHandler(folder.id!)}>
        <Icon className={"item-icon"} path={activeChecker(folder.id!) ? mdiFolderOpenOutline : mdiFolderOutline}/>
        <p className={"item-name"}>{folder.name}</p>
      </div>
      <FolderActionsDropdown folder={folder}/>
    </li>
  )
}

export default FolderItem;