import {useAtom} from "jotai";

import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {snippetIDAtom} from "../../../../../Atoms/Snippet/snippet-id.atom";
import {deleteSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function DeleteSnippetModal() {
  const [snippetID, setSnippetID] = useAtom(snippetIDAtom)
  const [{target: snippet}, setModal] = useAtom(modalAtom);

  function deleteHandler() {
    setSnippetID(0);
    deleteSnippet(snippetID);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h2>Are you sure you want to permanently remove {snippet!.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={() => setModal(modalConstructor.default)}>Cancel</button>
    </div>
  )
}

export default  DeleteSnippetModal;