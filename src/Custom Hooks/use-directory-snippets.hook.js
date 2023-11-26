import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {directoryAtom} from "../Atoms/Directory/directory.atom";
import useAllSnippets from "./use-all-snippets.hook";

function UseDirectorySnippets() {
  const {type, target} = useAtomValue(directoryAtom);
  const allSnippets = useAllSnippets()
  const [directorySnippets, setDirectorySnippets] = useState([]);

  const directoryFilter = {
    "smartGroup": (target) => smartGroupFilter[target]() ,
    "folder": (target) => allSnippets.filter(snippet => snippet.folderID === target),
    "tag": (target) => allSnippets.filter(snippet => snippet.tags.includes(target)),
  }

  const smartGroupFilter = {
    "all": () => allSnippets,
    "uncategorized": () => allSnippets.filter(snippet => snippet.folderID === 0),
    "recent": () => [],
  }

  useEffect(() => {
    setDirectorySnippets(directoryFilter[type](target))
  }, [type, target, allSnippets])

  return directorySnippets;
}

export default UseDirectorySnippets;