import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {snippetIDAtom} from "../Atoms/Snippet/snippet-id.atom";
import {createFragment} from "../Database/CRUD/fragment.crud";
import {fragmentSchema} from "../Database/database-schema";
import useAllFragments from "./use-all-fragments.hook";
import {Fragment} from "../Database/database-types";

function useSnippetFragments(): Fragment[] {
  const snippetID = useAtomValue(snippetIDAtom);
  const allFragments = useAllFragments();
  const [snippetFragments, setSnippetFragments] = useState<Fragment[]>([]);

  useEffect(() => {
    if (allFragments.length) {
      const filteredFragments = allFragments.filter(fragment => fragment.snippetID === snippetID)

      if (filteredFragments.length) {
        setSnippetFragments(filteredFragments)
      } else {
        createFragment({...fragmentSchema, snippetID});
      }
    }
  }, [snippetID, allFragments])

  return snippetFragments;
}

export default useSnippetFragments;