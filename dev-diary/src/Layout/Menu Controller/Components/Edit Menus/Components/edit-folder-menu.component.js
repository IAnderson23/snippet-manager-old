import {useAtomValue, useSetAtom} from "jotai";
import {menuAtom} from "../../../../../Atoms/menu-atom";
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import FolderForm from "../../Forms/folder-form.component";
import {updateFolder} from "../../../../../Database/CRUD/folder.crud";

function EditFolderMenu() {
  const setMenu = useSetAtom(menuAtom);
  const {target: folder} = useAtomValue(menuAtom)

  function submitHandler(e, folder) {
    e.preventDefault();
    updateFolder(folder.id, {...folder, name: folder.name}).then(res => console.log(res));
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Edit Folder</h3>
      <FolderForm initialFolder={folder}
                  submitHandler={submitHandler}
                  menuType={"Edit"}/>
    </div>
  )
}

export default EditFolderMenu;