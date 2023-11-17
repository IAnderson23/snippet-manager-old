import {useAtomValue, useSetAtom} from "jotai";

import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {updateSnippet} from "../../../../../Database/CRUD/snippet.crud";
import SnippetForm from "../../Forms/snippet-form.component";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function EditSnippetMenu() {
  const setMenu = useSetAtom(menuAtom);
  const {target: snippet} = useAtomValue(menuAtom)

  function submitHandler(e, snippet) {
    e.preventDefault();
    updateSnippet(snippet.id, {...snippet, name:snippet.name}).then(res => console.log(res));
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Edit Snippet</h3>
      <SnippetForm initialSnippet={snippet}
                   submitHandler={submitHandler}
                   menuType={"Edit"}/>
    </div>
  )
}

export default EditSnippetMenu;