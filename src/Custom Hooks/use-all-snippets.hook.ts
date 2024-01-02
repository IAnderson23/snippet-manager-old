import {useAtom} from "jotai";

import {allSnippetsAtom} from "../Atoms/Snippet/all-snippets.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";
import {useEffect} from "react";
import {Snippet} from "../Database/database-types";

function useAllSnippets(): Snippet[] {
  const [allSnippets, setAllSnippets] = useAtom(allSnippetsAtom);
  const snippets: Snippet[] | undefined = useLiveQuery<Snippet[]>(() => db.snippets.toArray(), []);

  useEffect(() => {
    if (snippets) setAllSnippets(snippets);
  }, [snippets])

 return allSnippets
}

export default useAllSnippets;