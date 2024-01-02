import {FormEvent} from "react";
import {useAtomValue, useSetAtom} from "jotai";

import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {createFolder} from "../../../../../Database/CRUD/folder.crud";
import {Folder} from "../../../../../Database/database-types";
import FolderForm from "../../Forms/folder-form.component";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function CreateFolderModal() {
  const setModal = useSetAtom(modalAtom);
  const {target: folder} = useAtomValue(modalAtom);

  function submitHandler(e: FormEvent<HTMLFormElement>, folder: Folder) {
    e.preventDefault();
    createFolder(folder);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h3>Create Folder</h3>
      <FolderForm initialFolder={folder as Folder}
                  submitHandler={submitHandler}
                  modalType={"Create"}/>
    </div>
  )
}

export default CreateFolderModal;