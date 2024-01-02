import {ChangeEvent, FormEvent, useState} from "react";
import {useSetAtom} from "jotai";

import {modalConstructor} from "../../../../Utility/Constructors/modal-constructor.utility";
import {modalAtom} from "../../../../Atoms/modal-atom";
import {Folder} from "../../../../Database/database-types";

interface FolderFormPropTypes {
    initialFolder: Folder
    submitHandler:(e: FormEvent<HTMLFormElement>, folder: Folder) => void
  modalType: string
}

function FolderForm({initialFolder, submitHandler, modalType}: FolderFormPropTypes) {
  const setModal = useSetAtom(modalAtom);
  const [folder, setFolder] = useState(initialFolder);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setFolder({...folder, [e.target.name]: e.target.value});
  }

  function invalidHandler(e: FormEvent<HTMLInputElement>) {
    const inputElement = e.target as HTMLInputElement;

    inputElement.setCustomValidity("Please Enter At Least 2 Characters");
  }

  function cancelHandler() {
    setModal(modalConstructor.default);
  }

  return (
    <form onSubmit={e => submitHandler(e, folder)}>
      <label>
        Name
        <input name={"name"}
               value={folder.name}
               pattern={".{2,}"}
               required={true}
               autoFocus={true}
               onChange={changeHandler}
               onInvalid={invalidHandler}/>
      </label>
      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default FolderForm;