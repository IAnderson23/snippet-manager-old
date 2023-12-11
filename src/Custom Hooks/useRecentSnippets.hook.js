import {useAtom} from "jotai";

import {recentSnippetsAtom} from "../Atoms/Snippet/recent-snippet.atom";

function useRecentSnippets() {
  const [recentSnippets, setRecentSnippets] = useAtom(recentSnippetsAtom);

  function updateRecentSnippets (newSnippet) {
    setRecentSnippets((previousList) => {
      return [newSnippet, ...previousList.filter(snippet => snippet.id !== newSnippet.id)].slice(0, 10);
    })
  }

  return {recentSnippets, updateRecentSnippets};
}

export default useRecentSnippets;