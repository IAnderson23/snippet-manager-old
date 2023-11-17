import {useAtomValue} from "jotai";
import {fragmentAtom} from "../../Atoms/Fragment/fragment.atom";
import {editorPositionAtom} from "../../Atoms/editor-position.atom";
import {isEmpty} from "lodash";

function EditorFooter() {
  const fragment = useAtomValue(fragmentAtom);
  const editorPosition = useAtomValue(editorPositionAtom)

  return (!isEmpty(fragment) &&
    <div id={"editor-footer"}>
      <p id={"left-footer"} className={"footer"}>{fragment?.language}</p>
      <p id={"right-footer"} className={"footer"}>Line {editorPosition.line || 0}, Column {editorPosition.column || 0}</p>
    </div>

  )
}

export default EditorFooter;