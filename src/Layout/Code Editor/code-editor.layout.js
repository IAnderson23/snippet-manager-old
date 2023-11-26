import {useAtomValue} from "jotai";

import EditorHeader from "./Components/Header/editor-header.component";
import {snippetAtom} from "../../Atoms/Snippet/snippet.atom";
import SnippetFragmentList from "./Components/Fragments/editor-fragment-list.component";
import EditorWorkspace from "./Components/editor-workspace.component";
import EditorFooter from "./editor-footer.component";

function CodeEditor() {
  const snippet = useAtomValue(snippetAtom);

  return (snippet.id &&
    <div id={"code-editor"}>
      <EditorHeader />
      <SnippetFragmentList />
      <EditorWorkspace />
      <EditorFooter />
    </div>
  )
}

export default CodeEditor;