import {useSetAtom} from "jotai";
import {menuAtom} from "../../../../Atoms/menu-atom";
import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import {editIcon, trashIcon} from "../../../../Assets/svg-icons.asset";

function FolderActions({menuTarget}) {
  const setMenu = useSetAtom(menuAtom);

  return (
    <div className={"item-actions"}>
      <button onClick={() => setMenu(menuConstructor.edit.folder(menuTarget))}>{editIcon}</button>
      <button onClick={() => setMenu(menuConstructor.delete.folder(menuTarget))}>{trashIcon}</button>
    </div>
  )
}

export default FolderActions;