import {Icon} from '@mdi/react'
import 'tippy.js/themes/light-border.css';
import {mdiDotsHorizontal} from '@mdi/js';
import {useAtomValue, useSetAtom} from "jotai";

import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {Menu, MenuItem} from "../../../../../Components/dropdown-menu.component";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function EditorButtonGroup() {
  const setModal = useSetAtom(modalAtom);
  const snippet = useAtomValue(snippetAtom);

  const label = <Icon className={"menu-icon"} path={mdiDotsHorizontal} size={1}/>

  return (
    <div id={"editor-button-group"}>
      <Menu menuLabel={label} alignment={"right"}>
        <MenuItem label={"Edit Snippet"} onClick={() => setModal(modalConstructor.edit.snippet(snippet))}/>
        <MenuItem label={"Add Fragment"} onClick={() => setModal(modalConstructor.create.fragment())}/>
        <MenuItem label={"Delete Snippet"} onClick={() => setModal(modalConstructor.delete.snippet(snippet))}/>
      </Menu>
    </div>
  )

}

export default EditorButtonGroup;