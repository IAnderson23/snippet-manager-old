import {useAtomValue} from "jotai";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {isEmpty} from "lodash";

function SnippetTags() {
  const snippet = useAtomValue(snippetAtom);

  return !isEmpty(snippet.tags) && (
    <div id={"tag-list-container"}>
      <ul id={"tag-list"}>
        {snippet.tags.map((tag, i) => <li className="tag-item" key={i}>{tag}</li>)}
      </ul>
    </div>
  )
}

export default SnippetTags;