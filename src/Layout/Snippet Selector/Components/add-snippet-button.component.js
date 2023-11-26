import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../Utility/Constructors/menu-constructor.utility";
import {addIcon} from "../../../Assets/svg-icons.asset";
import {menuAtom} from "../../../Atoms/menu-atom";

function AddSnippetButton() {
  const setMenu = useSetAtom(menuAtom);

  return (
    <button id={"create-snippet-button"} onClick={() => setMenu(menuConstructor.create.snippet())}>{addIcon}</button>
  )
}

export default AddSnippetButton;