import {useSetAtom} from "jotai";
import {popupAtom} from "../../../../Atoms/popup.atom";
import {popupConstructor} from "../../../../Utility/Constructors/popup-constructor.utility";
import {editIcon, trashIcon} from "../../../../Assets/svg-icons.asset";

function FolderActions({popupTarget}) {
  const setPopup = useSetAtom(popupAtom);

  return (
    <div className={"item-actions"}>
      <button onClick={() => setPopup(popupConstructor.edit.folder(popupTarget))}>{editIcon}</button>
      <button onClick={() => setPopup(popupConstructor.delete.folder(popupTarget))}>{trashIcon}</button>
    </div>
  )
}

export default FolderActions;