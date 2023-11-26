import {useAtomValue, useSetAtom} from "jotai";
import {menuAtom} from "../../../../../Atoms/menu-atom";
import {directoryAtom} from "../../../../../Atoms/Directory/directory.atom";
import {snippetSchema} from "../../../../../Database/database-schema";
import SnippetForm from "../../Forms/snippet-form.component";
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {createSnippet} from "../../../../../Database/CRUD/snippet.crud";

function CreateSnippetMenu() {
  const setMenu = useSetAtom(menuAtom);
  const directory = useAtomValue(directoryAtom);
  const folderID = directory.type === "folder" ? directory.target : 0;
  const snippet = {...snippetSchema, folderID};

  function submitHandler(e, snippet) {
    e.preventDefault();
    createSnippet({...snippet, name: snippet.name}).then(res => console.log(res));
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Create Snippet</h3>
      <SnippetForm initialSnippet={snippet}
                   submitHandler={submitHandler}
                   menuType={"Create"}/>
    </div>
  )
}

export default CreateSnippetMenu;