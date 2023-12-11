import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../Utility/Constructors/menu-constructor.utility";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import {menuAtom} from "../../../Atoms/menu-atom";

function AddSnippetButton() {
  const setMenu = useSetAtom(menuAtom);

  return (
    <button id={"create-snippet-button"} onClick={() => setMenu(menuConstructor.create.snippet())}>
      <Icon path={mdiPlus} size={1} />
    </button>
  )
}

export default AddSnippetButton;