import {useAtomValue} from "jotai";

import EditFragmentMenu from "./Components/edit-fragment-menu.component";
import EditSnippetMenu from "./Components/edit-snippet-menu.component";
import EditFolderMenu from "./Components/edit-folder-menu.component";
import {menuAtom} from "../../../../Atoms/menu-atom";


function EditMenuController() {
  const {subType} = useAtomValue(menuAtom);

  const editMenuSelector = {
    folder: <EditFolderMenu />,
    snippet: <EditSnippetMenu />,
    fragment: <EditFragmentMenu />,
    "": null,
  }

  const menuTarget = editMenuSelector[subType];

  return (subType &&
    <>
      {menuTarget}
    </>
  )
}

export default EditMenuController;