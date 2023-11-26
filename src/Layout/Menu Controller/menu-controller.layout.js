import {useAtomValue} from "jotai";

import CreateMenuController from "./Components/Create Menus/create-menu-controller.component";
import DeleteMenuController from "./Components/Delete Menus/delete-menu-controller.component";
import EditMenuController from "./Components/Edit Menus/edit-menu-controller.conmponent";
import {menuAtom} from "../../Atoms/menu-atom";

function MenuController() {
  const {type} = useAtomValue(menuAtom);

  const menuSelector = {
    "create": <CreateMenuController />,
    "edit": <EditMenuController />,
    "delete": <DeleteMenuController />,
    "": null
  }

  const menuTarget = menuSelector[type];

  return (type &&
    <div id={"menu-container"}>
      {menuTarget}
    </div>
  )
}

export default MenuController;