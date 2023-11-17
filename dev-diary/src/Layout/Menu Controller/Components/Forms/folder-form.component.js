import {useState} from "react";
import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import {menuAtom} from "../../../../Atoms/menu-atom";

function FolderForm({initialFolder, submitHandler, menuType}) {
  const setMenu = useSetAtom(menuAtom);
  const [folder, setFolder] = useState(initialFolder);

  function changeHandler(e) {
    setFolder({...folder, [e.target.name]: e.target.value});
  }

  function invalidHandler(e) {
    e.target.setCustomValidity("Please Enter At Least 2 Characters");
  }

  function cancelHandler() {
    setMenu(menuConstructor.default);
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
      <button className={"submit"} type={"submit"}>{menuType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default FolderForm;