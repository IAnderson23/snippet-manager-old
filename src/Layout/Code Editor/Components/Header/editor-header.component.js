import {useAtomValue} from "jotai";
import {snippetAtom} from "../../../../Atoms/Snippet/snippet.atom";
import EditorButtonGroup from "./Components/editor-button-group.component";
import SnippetTags from "./Components/snippet-tags.component";
import AddTagItem from "./Components/add-tag-item.component";

function EditorHeader() {
  const snippet = useAtomValue(snippetAtom);

  return (
    <div id={"editor-header"}>
      <h2>{snippet.name}</h2>
      <EditorButtonGroup />
      <div id={"snippet-tags-container"}>
        <SnippetTags />
        <AddTagItem />
      </div>
    </div>
  )
}

export default EditorHeader;