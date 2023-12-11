import {useAtom, useAtomValue, useSetAtom} from "jotai";

import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {snippetIDAtom} from "../../../../../Atoms/Snippet/snippet-id.atom";
import {deleteSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function DeleteSnippetMenu() {
  const [snippetID, setSnippetID] = useAtom(snippetIDAtom)
  const setMenu = useSetAtom(menuAtom);
  const snippet = useAtomValue(snippetAtom);

  function deleteHandler() {
    deleteSnippet(snippetID);
    setSnippetID(0);
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h2>Are you sure you want to permanently remove {snippet.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={() => setMenu(menuConstructor.default)}>Cancel</button>
    </div>
  )
}

export default  DeleteSnippetMenu;