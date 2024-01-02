import {ReactElement, useEffect} from "react";
import {useAtom, useAtomValue} from "jotai";

import useSnippetFragments from "../../../../Custom Hooks/use-snippet-fragments.hook";
import {fragmentIdAtom} from "../../../../Atoms/Fragment/fragment-id.atom";
import {snippetIDAtom} from "../../../../Atoms/Snippet/snippet-id.atom";
import EditorFragmentItem from "./editor-fragment-item.component";
import {isEmpty} from "lodash";

function SnippetFragmentList(): ReactElement {
  const [fragmentID, setFragmentID] = useAtom(fragmentIdAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const fragments = useSnippetFragments();

  useEffect(() => {
    setFragmentID(0)
  }, [snippetID])

  useEffect(() => {
    if (fragments.length && !fragmentID && !isEmpty(fragments)) {
      setFragmentID(fragments[0].id!)
    }
  }, [fragments])

  return (fragments &&
    <div id={"fragment-list-container"}>
      <ul id={"fragment-list"}>
        {fragments.map((fragment, i) => <EditorFragmentItem key={i} fragment={fragment}/>)}
      </ul>
    </div>
  )
}

export default SnippetFragmentList;