import {isEmpty} from "lodash";
import {useEffect, useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import {useAtomValue, useSetAtom} from "jotai";
import {javascript} from "@codemirror/lang-javascript";

import {editorPositionAtom} from "../../../Atoms/editor-position.atom";
import {snippetIDAtom} from "../../../Atoms/Snippet/snippet-id.atom";
import {updateFragment} from "../../../Database/CRUD/fragment.crud";
import {fragmentAtom} from "../../../Atoms/Fragment/fragment.atom";

function EditorWorkspace() {
  const fragment = useAtomValue(fragmentAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const setEditorPosition = useSetAtom(editorPositionAtom);

  const [workspaceData, setWorkspaceData] = useState({})
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    if (!isSaved) {
      updateFragment(workspaceData.id, workspaceData)
      setIsSaved(true);
    }

    setWorkspaceData({id: fragment.id, code: fragment.code, language: fragment.language})
  }, [snippetID, fragment])

  useEffect(() => {
    if (!isSaved) {
      let timeout = setTimeout(() => {
        updateFragment(workspaceData.id, workspaceData);
        setIsSaved(true);
      }, 3000)

      return () => {
      clearTimeout(timeout)
      }
    }
  }, [workspaceData])

  function changeHandler(value) {
    setIsSaved(false);
    console.log(value)
    setWorkspaceData({...workspaceData, code: value});
  }

  function updateHandler(viewUpdate) {
    let offset = viewUpdate.view.state.selection.main.head;
    let line = viewUpdate.state.doc.lineAt(offset);
    let position = {line: line.number, column: offset - line.from};
    setEditorPosition(position);
  }

  return (!isEmpty(workspaceData) &&
    <div id={"code-mirror"}>
      <CodeMirror value={workspaceData?.code}
                  className={"cm-container"}
                  height={"100%"}
                  extensions={[javascript({jsx: true})]}
                  onChange={changeHandler}
                  onUpdate={updateHandler}/>
    </div>
  )
}

export default EditorWorkspace;