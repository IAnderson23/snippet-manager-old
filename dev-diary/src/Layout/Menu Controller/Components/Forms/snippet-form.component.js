import {useState} from "react";
import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import useFolderOptionList from "../../../../Custom Hooks/use-folder-option-list.hook";
import {menuAtom} from "../../../../Atoms/menu-atom";

function SnippetForm({initialSnippet, submitHandler, menuType}) {
  const setMenu = useSetAtom(menuAtom);
  const [snippet, setSnippet] = useState(initialSnippet);
  const folderOptionList = useFolderOptionList();

  function changeHandler(e) {
    setSnippet({...snippet, [e.target.name]: e.target.value,})
  }

  function invalidHandler(e) {
    e.target.setCustomValidity("Please Enter At Least 2 Characters")
  }

  function cancelHandler() {
    setMenu(menuConstructor.default)
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
      <button className={"submit"} type={"submit"}>{menuType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default SnippetForm;