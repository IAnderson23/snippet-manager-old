import {Icon} from "@mdi/react";
import {mdiDotsHorizontal} from "@mdi/js";

import {Menu, MenuItem} from "../../../../Components/dropdown-menu.component";

//TODO: Come Back
function FolderActionsDropdown() {
  const label = <Icon className={"actions-icon"} path={mdiDotsHorizontal} size={1.5} />

  return (
    <Menu label={label}>
      <MenuItem label={"Rename"}/>
      <MenuItem label={"Delete"}/>
    </Menu>
  )
}

export default FolderActionsDropdown;