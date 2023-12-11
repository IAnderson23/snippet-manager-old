import {Icon} from "@mdi/react";
import {useSetAtom} from "jotai";
import {mdiDotsHorizontal} from "@mdi/js";

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import {Menu, MenuItem} from "../../../../Components/dropdown-menu.component";
import {menuAtom} from "../../../../Atoms/menu-atom";

function FolderActionsDropdown({menuTarget}) {
  const setMenu = useSetAtom(menuAtom)

  const label = <Icon className={"actions-icon"} path={mdiDotsHorizontal} size={1.5} />

  return (
    <Menu label={label}>
      <MenuItem label={"Rename"} onClick={() => setMenu(menuConstructor.edit.folder(menuTarget))}/>
      <MenuItem label={"Delete"} onClick={() => setMenu(menuConstructor.delete.folder(menuTarget))}/>
    </Menu>
  )
}

export default FolderActionsDropdown;