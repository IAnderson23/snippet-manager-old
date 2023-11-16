import {useAtom} from "jotai";

import {allSnippetsAtom} from "../Atoms/Snippet/all-snippets.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";
import {useEffect} from "react";

function useAllSnippets() {
  const [allSnippets, setAllSnippets] = useAtom(allSnippetsAtom);
  const snippets = useLiveQuery(() => db.snippets.toArray(), [], []);

  useEffect(() => {
    setAllSnippets(snippets);
  }, [snippets])

  return allSnippets;
}

export default useAllSnippets;