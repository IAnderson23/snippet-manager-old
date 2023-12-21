import {Icon} from '@mdi/react'
import 'tippy.js/themes/light-border.css';
import { mdiDotsHorizontal } from '@mdi/js';
import {useAtomValue, useSetAtom} from "jotai";

//TODO: Come Back
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {Menu, MenuItem} from "../../../../../Components/dropdown-menu.component";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function EditorButtonGroup() {
  const setMenu = useSetAtom(menuAtom);
  const snippet = useAtomValue(snippetAtom);

  const label = <Icon className={"menu-icon"} path={mdiDotsHorizontal} size={1}/>

  return (
    <div id={"editor-button-group"}>
      <Menu label={label} alignment={"right"}>
        <MenuItem label={"Edit Snippet"} onClick={() => setMenu(menuConstructor.edit.snippet(snippet))}/>
        <MenuItem label={"Add Fragment"} onClick={() => setMenu(menuConstructor.create.fragment())}/>
        <MenuItem label={"Delete Snippet"} onClick={() => setMenu(menuConstructor.delete.snippet(snippet))}/>
      </Menu>
    </div>
  )

}

export default EditorButtonGroup;