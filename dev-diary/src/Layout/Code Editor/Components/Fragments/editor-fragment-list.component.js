import {isEmpty} from "lodash";
import {useEffect} from "react";
import {useAtom, useAtomValue} from "jotai";

import useSnippetFragments from "../../../../Custom Hooks/use-snippet-fragments.hook";
import {fragmentIdAtom} from "../../../../Atoms/Fragment/fragment-id.atom";
import {snippetIDAtom} from "../../../../Atoms/Snippet/snippet-id.atom";
import EditorFragmentItem from "./editor-fragment-item.component";

function SnippetFragmentList() {
  const [fragmentID, setFragmentID] = useAtom(fragmentIdAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const fragments = useSnippetFragments();

  useEffect(() => {
    setFragmentID(0)
  }, [snippetID])

  useEffect(() => {
    if (fragments.isLoaded && fragmentID === 0 && !isEmpty(fragments)) {
      setFragmentID(fragments.data[0].id)
    }
  }, [fragments.isLoaded, fragments.data])

  return (fragments.isLoaded &&
    <div id={"fragment-list-container"}>
      <ul id={"fragment-list"}>
        {fragments.data.map((fragment, i) => <EditorFragmentItem key={i} fragment={fragment}/>)}
      </ul>
    </div>
  )
}

export default SnippetFragmentList;