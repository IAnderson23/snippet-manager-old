import {useAtom} from "jotai";

import {recentSnippetsAtom} from "../Atoms/Snippet/recent-snippet.atom";
import {Snippet} from "../Database/database-types";

interface RecentSnippetsHook {
  recentSnippets: Snippet[];
  updateRecentSnippets: (newSnippet: Snippet) => void;
}

function useRecentSnippets(): RecentSnippetsHook {
  const [recentSnippets, setRecentSnippets] = useAtom(recentSnippetsAtom);

  function updateRecentSnippets (newSnippet: Snippet) {
    setRecentSnippets((previousList) => {
      return [newSnippet, ...previousList.filter(snippet => snippet.id !== newSnippet.id)].slice(0, 10);
    })
  }

  return {recentSnippets, updateRecentSnippets};
}

export default useRecentSnippets;