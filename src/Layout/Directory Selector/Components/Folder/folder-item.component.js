import Icon from '@mdi/react';
import {useAtom} from "jotai";
import { mdiFolderOutline } from '@mdi/js';
import { mdiFolderOpenOutline } from '@mdi/js';

import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import FolderActions from "./folder-actions.component";

function FolderItem({folder}) {
  const [directory, setDirectory] = useAtom(directoryAtom)

  function activeChecker(target) {
    return directory.type === "folder" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target) {
    setDirectory(directoryConstructor.folder(target))
  }

  return (
    <li key={folder.id} className={"directory-item " + activeChecker(folder.id)}>
      <div className={"item-header"} onClick={() => onClickHandler(folder.id)}>
        <Icon path={activeChecker(folder.id) ? mdiFolderOpenOutline : mdiFolderOutline} size={1} />
        <p className={"item-name"}>{folder.name}</p>
      </div>
      <FolderActions menuTarget={folder}/>
    </li>
  )
}

export default FolderItem;