import {useEffect, useState} from "react";

import useAllSnippets from "./use-all-snippets.hook";

function useUniqueTags() {
  const allSnippets = useAllSnippets();
  const [uniqueTags, setUniqueTags] = useState([]);

  useEffect(() => {
    let tags = allSnippets.map(snippet => snippet.tags).flat();
    let uniques = tags.filter((tag, index, array) => array.indexOf(tag) === index);
    setUniqueTags(uniques);
  }, [allSnippets])

  return uniqueTags;
}

export default useUniqueTags;