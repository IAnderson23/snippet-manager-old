import {useAtomValue} from "jotai";
import {menuAtom} from "../../../../Atoms/menu-atom";
import CreateFolderMenu from "./Components/create-folder-menu.component";
import CreateSnippetMenu from "./Components/create-snippet-menu.component";
import CreateFragmentMenu from "./Components/create-fragment-menu.component";

function CreateMenuController() {
  const {subType} = useAtomValue(menuAtom);

  const createMenuSelector = {
    folder: <CreateFolderMenu/>,
    snippet: <CreateSnippetMenu/>,
    fragment: <CreateFragmentMenu/>,
    "": null,
  }

  const menuTarget = createMenuSelector[subType];

  return (subType &&
    <>
      {menuTarget}
    </>
  )
}

export default CreateMenuController;