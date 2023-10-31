import {useAtom} from "jotai";

import {snippetListAtom} from "../Atoms/Snippet/snippet-list.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";

function useSnippetList() {
  const [snippetList, setSnippetList] = useAtom(snippetListAtom);

  const newList = useLiveQuery(() => db.snippets.toArray(), [], []);

  setSnippetList(newList);

  return snippetList;
}

export default useSnippetList;