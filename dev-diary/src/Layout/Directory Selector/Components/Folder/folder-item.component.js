import {useAtom} from "jotai";

import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import {folderIcon} from "../../../../Assets/svg-icons.asset";
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
        {folderIcon}
        <p className={"item-name"}>{folder.name}</p>
      </div>
      <FolderActions menuTarget={folder}/>
    </li>
  )
}

export default FolderItem;