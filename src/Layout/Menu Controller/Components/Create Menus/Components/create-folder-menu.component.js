import {useAtomValue, useSetAtom} from "jotai";

import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {createFolder} from "../../../../../Database/CRUD/folder.crud";
import FolderForm from "../../Forms/folder-form.component";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function CreateFolderMenu() {
  const setMenu = useSetAtom(menuAtom);
  const {target: folder} = useAtomValue(menuAtom);

  function submitHandler(e, folder) {
    e.preventDefault();
    createFolder(folder);
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Create Folder</h3>
      <FolderForm initialFolder={folder}
                  submitHandler={submitHandler}
                  menuType={"Create"}/>
    </div>
  )
}

export default CreateFolderMenu;