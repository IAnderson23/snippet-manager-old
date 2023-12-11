import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import useFilteredSnippets from "./use-filtered-snippets.hook";
import {sortConfigAtom} from "../Atoms/sort-config.atom";

function useSortedSnippets() {
  const snippets = useFilteredSnippets();
  const {sortBy, isAscending} = useAtomValue(sortConfigAtom);
  const [sortedSnippets, setSortedSnippets] = useState([]);

  function stringSort(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB)
      return -1;
    if (nameA > nameB)
      return 1;

    return 0;
  }

  function nameSort(snippets) {
    let numArr = snippets.filter(snippet => !!+snippet.name).sort((a, b) => a.name - b.name);
    let strArr = snippets.filter(snippet => !!!+snippet.name).sort(stringSort);

    return numArr.concat(strArr);
  }

  function dateCreatedSort(snippets) {
    return snippets.sort((a, b) => a.created - b.created);
  }

  function sort(snippets, sortBy) {
    let result = snippets;

    if (sortBy === "name")
      result = nameSort(snippets)
    if (sortBy === "created")
      result = dateCreatedSort(snippets);

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