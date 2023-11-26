import {useAtomValue} from "jotai";

import DeleteFragmentMenu from "./Components/delete-fragment-menu.component";
import DeleteSnippetMenu from "./Components/delete-snippet-menu.component";
import DeleteFolderMenu from "./Components/delete-folder-menu.component";
import {menuAtom} from "../../../../Atoms/menu-atom";

function DeleteMenuController() {
  const {subType} = useAtomValue(menuAtom);

  const deleteMenuSelector = {
    folder: <DeleteFolderMenu />,
    snippet: <DeleteSnippetMenu />,
    fragment: <DeleteFragmentMenu />,
    "": null,
  }

  const menuTarget = deleteMenuSelector[subType];

  return (subType &&
    <>
      {menuTarget}
    </>
  )
}

export default DeleteMenuController;