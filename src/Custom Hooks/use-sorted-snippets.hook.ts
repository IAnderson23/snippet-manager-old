import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import useFilteredSnippets from "./use-filtered-snippets.hook";
import {sortConfigAtom} from "../Atoms/sort-config.atom";
import {Snippet} from "../Database/database-types";

function useSortedSnippets(): Snippet[] {
  const snippets = useFilteredSnippets();
  const {sortBy, isAscending} = useAtomValue(sortConfigAtom);
  const [sortedSnippets, setSortedSnippets] = useState<Snippet[]>([]);

  function nameSort(a: Snippet, b: Snippet): number {
      if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1
      if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1

      return 0
  }

  function dateCreatedSort(a: Snippet, b: Snippet): number {
    return a.created - b.created
  }

  function sort(snippets: Snippet[], sortBy: string): Snippet[] {
    let result = snippets;

    if (sortBy === "name")
      result.sort(nameSort)
    if (sortBy === "created")
      result.sort(dateCreatedSort)

    return result;
  }

  useEffect(() => {
    const sortedList = sort(snippets, sortBy);
    const orderList = [...sortedList];

    if (!isAscending)
      orderList.reverse();

    setSortedSnippets(orderList);
  }, [snippets, sortBy, isAscending])

  return sortedSnippets;
}

export default useSortedSnippets;