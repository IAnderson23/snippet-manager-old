import {useAtom, useAtomValue} from "jotai";
import {modalAtom} from "../../../../../Atoms/modal-atom";
import {directoryAtom} from "../../../../../Atoms/Directory/directory.atom";
import SnippetForm from "../../Forms/snippet-form.component";
import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {createSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {Snippet} from "../../../../../Database/database-types";
import {FormEvent} from "react";

function CreateSnippetModal() {
  const [{target} ,setModal] = useAtom(modalAtom);
  const directory = useAtomValue(directoryAtom);
  const folderID = directory.type === "folder" ? directory.target : 0;
  const snippet = {...target, folderID};

  function submitHandler(e: FormEvent<HTMLFormElement>, snippet: Snippet) {
    e.preventDefault();
    createSnippet(snippet);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <p className={"modal-name"}>Create Snippet</p>
      <SnippetForm initialSnippet={snippet as Snippet}
                   submitHandler={submitHandler}
                   modalType={"Create"}/>
    </div>
  )
}

export default CreateSnippetModal;