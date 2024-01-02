import {modalAtom} from "../../../../../Atoms/modal-atom";
import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import FolderForm from "../../Forms/folder-form.component";
import {updateFolder} from "../../../../../Database/CRUD/folder.crud";
import {useAtom} from "jotai/index";
import {FormEvent} from "react";
import {Folder} from "../../../../../Database/database-types";

function EditFolderModal() {
  const [{target: folder}, setModal] = useAtom(modalAtom);

  function submitHandler(e: FormEvent<HTMLFormElement>, folder: Folder) {
    e.preventDefault();
    updateFolder(folder.id!, folder);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h3>Edit Folder</h3>
      <FolderForm initialFolder={folder as Folder}
                  submitHandler={submitHandler}
                  modalType={"Edit"}/>
    </div>
  )
}

export default EditFolderModal;