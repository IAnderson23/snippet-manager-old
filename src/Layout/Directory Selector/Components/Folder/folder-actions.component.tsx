import {Icon} from "@mdi/react";
import {useSetAtom} from "jotai";
import {mdiDotsHorizontal} from "@mdi/js";

import {modalConstructor} from "../../../../Utility/Constructors/modal-constructor.utility";
import {Menu, MenuItem} from "../../../../Components/dropdown-menu.component";
import {modalAtom} from "../../../../Atoms/modal-atom";
import {Folder} from "../../../../Database/database-types";

function FolderActionsDropdown({folder}: {folder: Folder}) {
  const setModal = useSetAtom(modalAtom)

  const label = <Icon className={"menu-icon"} path={mdiDotsHorizontal} size={1} />

  return (
    <Menu menuLabel={label} alignment={"left"}>
      <MenuItem label={"Rename"} onClick={() => setModal(modalConstructor.edit.folder(folder))}/>
      <MenuItem label={"Delete"} onClick={() => setModal(modalConstructor.delete.folder(folder))}/>
    </Menu>
  )
}

export default FolderActionsDropdown;