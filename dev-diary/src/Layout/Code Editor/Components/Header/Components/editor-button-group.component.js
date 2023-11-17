import {useAtomValue, useSetAtom} from "jotai";

import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {fragmentAtom} from "../../../../../Atoms/Fragment/fragment.atom";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function EditorButtonGroup() {
  const setMenu = useSetAtom(menuAtom);
  const snippet = useAtomValue(snippetAtom);
  const fragment = useAtomValue(fragmentAtom);

  return (
    <div id={"editor-buttons"}>
      <button onClick={() => setMenu(menuConstructor.edit.snippet(snippet))}>Edit Snippet</button>
      <button onClick={() => setMenu(menuConstructor.delete.snippet(snippet))}>Delete Snippet</button>
      <button onClick={() => setMenu(menuConstructor.create.fragment())}>Add Fragment</button>
      <button onClick={() => setMenu(menuConstructor.edit.fragment(fragment))}>Edit Fragment</button>
      <button onClick={() => setMenu(menuConstructor.delete.fragment(fragment))}>Delete Fragment</button>
    </div>
  )
}

export default EditorButtonGroup;