import {FormEvent} from "react";
import {useAtomValue, useSetAtom} from "jotai";

import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {updateSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {Snippet} from "../../../../../Database/database-types";
import SnippetForm from "../../Forms/snippet-form.component";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function EditSnippetModal() {
  const setModal = useSetAtom(modalAtom);
  const {target: snippet} = useAtomValue(modalAtom)

  function submitHandler(e: FormEvent<HTMLFormElement>, snippet: Snippet) {
    e.preventDefault();
    updateSnippet(snippet.id!, snippet);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h3>Edit Snippet</h3>
      <SnippetForm initialSnippet={snippet as Snippet}
                   submitHandler={submitHandler}
                   modalType={"Edit"}/>
    </div>
  )
}

export default EditSnippetModal;