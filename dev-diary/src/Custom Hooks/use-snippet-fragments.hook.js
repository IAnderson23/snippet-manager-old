import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {snippetIDAtom} from "../Atoms/Snippet/snippet-id.atom";
import useAllFragments from "./use-all-fragments.hook";
import {createFragment} from "../Database/CRUD/fragment.crud";
import {fragmentSchema} from "../Database/database-schema";

function useSnippetFragments() {
  const snippetID = useAtomValue(snippetIDAtom);
  const fragments = useAllFragments();
  const [snippetFragments, setSnippetFragments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (fragments.isLoaded) {
      const filteredFragments = fragments.data.filter(fragment => fragment.snippetID === snippetID)
      if (filteredFragments.length) {
        setSnippetFragments(filteredFragments)
        setIsLoaded(true)
      } else {
        createFragment({...fragmentSchema, snippetID: snippetID}).then(res => console.log(res))
      }
    }
  }, [snippetID, fragments.isLoaded, fragments.data])

  return {isLoaded, data: snippetFragments};
}

export default useSnippetFragments;