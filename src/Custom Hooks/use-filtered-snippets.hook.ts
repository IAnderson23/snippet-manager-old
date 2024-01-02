import {useAtomValue} from "jotai";
import {userQueryAtom} from "../Atoms/user-query.atom";
import useDirectorySnippets from "./use-directory-snippets.hook";
import {useEffect, useState} from "react";
import {Snippet} from "../Database/database-types";

function useFilteredSnippets(): Snippet[] {
  const userQuery = useAtomValue(userQueryAtom);
  const directorySnippets = useDirectorySnippets();
  const [filteredSnippets, setFilteredSnippets] = useState<Snippet[]>([]);

  function filterSnippets(snippets: Snippet[], userQuery: string) {
    return snippets.filter(snippet => snippet.name.includes(userQuery));
  }

  useEffect(() => {
    setFilteredSnippets(filterSnippets(directorySnippets, userQuery));
  }, [userQuery, directorySnippets])

  return filteredSnippets;
}

export default useFilteredSnippets;