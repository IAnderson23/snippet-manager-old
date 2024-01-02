import {useEffect, useState} from "react";

import useAllSnippets from "./use-all-snippets.hook";


function useUniqueTags(): string[] {
  const allSnippets = useAllSnippets();
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    let tags: string[] = allSnippets.map(snippet => snippet.tags).flat();
    let uniques: string[] = tags.filter((tag, index, array) => array.indexOf(tag) === index);
    setUniqueTags(uniques);
  }, [allSnippets])

  return uniqueTags;

}

export default useUniqueTags;