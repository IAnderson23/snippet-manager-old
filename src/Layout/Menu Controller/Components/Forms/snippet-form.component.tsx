import {ChangeEvent, FormEvent, useState} from "react";
import {useSetAtom} from "jotai";

import {modalConstructor} from "../../../../Utility/Constructors/modal-constructor.utility";
import useFolderOptionList from "../../../../Custom Hooks/use-folder-option-list.hook";
import {modalAtom} from "../../../../Atoms/modal-atom";
import {Snippet} from "../../../../Database/database-types";

interface SnippetFormPropTypes {
  initialSnippet: Snippet
  submitHandler:(e: FormEvent<HTMLFormElement>, folder: Snippet) => void
  modalType: string
}

function SnippetForm({initialSnippet, submitHandler, modalType}: SnippetFormPropTypes) {
  const setModal = useSetAtom(modalAtom);
  const [snippet, setSnippet] = useState(initialSnippet);
  const folderOptionList = useFolderOptionList();

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSnippet({...snippet, [e.target.name]: e.target.value,})
  }

  function invalidHandler(e: FormEvent<HTMLInputElement>) {
    const inputElement = e.target as HTMLInputElement

    inputElement.setCustomValidity("Please Enter At Least 2 Characters")
  }

  function cancelHandler() {
    setModal(modalConstructor.default)
  }

  return (
    <form onSubmit={e => submitHandler(e, snippet)}>
      <label>
        Name
        <input name={"name"}
               value={snippet.name}
               pattern={".{2,}"}
               required={true}
               autoFocus={true}
               onChange={changeHandler}
               onInvalid={invalidHandler}/>
      </label>
      <label>
        Folder
        <select defaultValue={snippet.folderID}>
          <option value={0}>Uncategorized</option>
          {folderOptionList}
        </select>
      </label>
      <label>
        Tags
        <input name={"tags"} placeholder={"Optional"} onChange={changeHandler}/>
      </label>
      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default SnippetForm;