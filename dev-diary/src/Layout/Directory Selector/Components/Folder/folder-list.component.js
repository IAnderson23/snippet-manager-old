import {useAtom, useSetAtom} from "jotai";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import {popupAtom} from "../../../../Atoms/popup.atom";
import {popupConstructor} from "../../../../Utility/Constructors/popup-constructor.utility";
import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {addIcon, folderIcon} from "../../../../Assets/svg-icons.asset";
import FolderActions from "./folder-actions.component";
import useFolderList from "../../../../Custom Hooks/use-folder-list.hook";

function FolderList() {
  const [directory, setDirectory] = useAtom(directoryAtom)
  const setPopup = useSetAtom(popupAtom);
  const folderList = useFolderList();

  console.log(folderList)

  function activeChecker(target) {
    return directory.type === "folder" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target) {
    setDirectory(directoryConstructor.folder(target))
  }

  function onAddHandler() {
    setPopup(popupConstructor.create.folder())
  }

  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Folders</h5>
        <button onClick={onAddHandler}>{addIcon}</button>
      </div>
      <ul>
        {folderList?.map(folder => {
          return  <li key={folder.id} className={"directory-item " + activeChecker(folder.id)}>
            <div className={"item-header"} onClick={() => onClickHandler(folder.id)}>
              {folderIcon}
              <p className={"item-name"}>{folder.name}</p>
            </div>
            <FolderActions popupTarget={folder}/>
          </li>
        })}
      </ul>
    </div>
  )
}

export default FolderList;