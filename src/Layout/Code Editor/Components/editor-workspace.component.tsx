import {isEmpty} from "lodash";
import {useEffect, useState} from "react";
import CodeMirror, {ViewUpdate} from "@uiw/react-codemirror";
import {useAtomValue, useSetAtom} from "jotai";
import {javascript} from "@codemirror/lang-javascript";
import {oneDark} from "@codemirror/theme-one-dark"

import {editorPositionAtom} from "../../../Atoms/editor-position.atom";
import {snippetIDAtom} from "../../../Atoms/Snippet/snippet-id.atom";
import {updateFragment} from "../../../Database/CRUD/fragment.crud";
import {fragmentAtom} from "../../../Atoms/Fragment/fragment.atom";
import {Fragment} from "../../../Database/database-types";
import {isFragment} from "../../../Utility/Type Guards/fragment-type-guard";

function EditorWorkspace() {
  const fragment = useAtomValue(fragmentAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const setEditorPosition = useSetAtom(editorPositionAtom);

  const [workspaceData, setWorkspaceData] = useState<Fragment>(fragment)
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    if (!isSaved && isFragment(workspaceData) && typeof workspaceData.id === "number") {
      updateFragment(workspaceData.id, workspaceData);
      setIsSaved(true);
    }

    if (fragment) {
      setWorkspaceData(fragment);
    }
  }, [snippetID, fragment]);

  useEffect(() => {
    if (!isSaved) {
      const timeout = setTimeout(() => {
        if (typeof workspaceData.id === "number") {
        updateFragment(workspaceData.id, workspaceData);
        setIsSaved(true);
        }
      }, 3000)

      return () => {
      clearTimeout(timeout)
      }
    }
  }, [workspaceData, isSaved])

  function changeHandler(value: string) {
    setIsSaved(false);
    setWorkspaceData((prevData) => ({...prevData, code: value}));
  }

  function updateHandler(viewUpdate: ViewUpdate) {
    let offset = viewUpdate.view.state.selection.main.head;
    let line = viewUpdate.state.doc.lineAt(offset);
    let position = {line: line.number, column: offset - line.from + 1};
    setEditorPosition(position);
  }

  return !isEmpty(workspaceData) && (
    <div id={"code-mirror"}>
      <CodeMirror value={workspaceData?.code}
                  basicSetup={{foldGutter: false, highlightActiveLineGutter: false, autocompletion: false}}
                  className={"cm-container"}
                  height={"100%"}
                  extensions={[javascript({jsx: true}), oneDark]}
                  onChange={changeHandler}
                  onUpdate={updateHandler}/>
    </div>
  )
}

export default EditorWorkspace;