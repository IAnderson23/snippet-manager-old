import {useAtomValue} from "jotai";
import {userQueryAtom} from "../Atoms/user-query.atom";
import useDirectorySnippets from "./use-directory-snippets.hook";
import {useEffect, useState} from "react";

function useFilteredSnippets() {
  const userQuery = useAtomValue(userQueryAtom);
  const directorySnippets = useDirectorySnippets();
  const [filteredSnippets, setFilteredSnippets] = useState([]);

  function filterSnippets(snippets, userQuery) {
    return snippets?.filter(snippet => snippet.name.includes(userQuery));
  }

  useEffect(() => {
    setFilteredSnippets(filterSnippets(directorySnippets, userQuery));
  }, [userQuery, directorySnippets])

  return filteredSnippets;
}

export default useFilteredSnippets;