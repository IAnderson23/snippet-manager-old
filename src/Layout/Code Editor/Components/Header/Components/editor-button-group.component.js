import {Icon} from '@mdi/react'
import Tippy from "@tippyjs/react"
import 'tippy.js/themes/light-border.css';
import { mdiDotsHorizontal } from '@mdi/js';
import {useAtomValue, useSetAtom} from "jotai";

//TODO: Come Back
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {fragmentAtom} from "../../../../../Atoms/Fragment/fragment.atom";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function EditorButtonGroup() {
  const setMenu = useSetAtom(menuAtom);
  const snippet = useAtomValue(snippetAtom);
  const fragment = useAtomValue(fragmentAtom);

  const content = <>
    <button onClick={() => setMenu(menuConstructor.edit.snippet(snippet))}>Edit Snippet</button>
    <button onClick={() => setMenu(menuConstructor.delete.snippet(snippet))}>Delete Snippet</button>
    <button onClick={() => setMenu(menuConstructor.create.fragment())}>Add Fragment</button>
    <button onClick={() => setMenu(menuConstructor.edit.fragment(fragment))}>Edit Fragment</button>
    <button onClick={() => setMenu(menuConstructor.delete.fragment(fragment))}>Delete Fragment</button>
  </>

  const dropdown = (
    <div >
      <p >Add Snippet</p>
      <p >Edit Fragment</p>
      <p >Delete Fragment</p>
    </div>
  )



  // function dropdown(attrs) {
  //   return (
  //     <div className={"dropdown-menu"} {...attrs}>
  //       <p className={"dropdown-item"}>Add Snippet</p>
  //       <p className={"dropdown-item"}>Edit Fragment</p>
  //       <p className={"dropdown-item"}>Delete Fragment</p>
  //     </div>
  //   )
  // }

  return (
    <div id={"editor-buttons"}>
      <Tippy content={dropdown} interactive={true} trigger={"click"} arrow={true} theme={"light-border"}>
        <Icon path={mdiDotsHorizontal} size={1.5} />  
      </Tippy>
    </div>
  )
}

export default EditorButtonGroup;