import {useAtomValue} from "jotai";
import {useEffect, useState} from "react";

import {directoryAtom} from "../Atoms/Directory/directory.atom";
import useAllSnippets from "./use-all-snippets.hook";
import useRecentSnippets from "./useRecentSnippets.hook";
import {Folder, Snippet} from "../Database/database-types";

function useDirectorySnippets(): Snippet[] {
  const {type, target} = useAtomValue(directoryAtom);
  const allSnippets = useAllSnippets()
  const {recentSnippets} = useRecentSnippets()
  const [directorySnippets, setDirectorySnippets] = useState<Snippet[]>([]);

  function directoryFilter(type: string, target: string |  Folder["id"]): Snippet[] {
    if (type === "smartGroup" && typeof target === 'string') {
      return smartGroupFilter(target);
    }

    if (type === "folder" && typeof target === 'number') {
      return allSnippets.filter(snippet => snippet.folderID === target);
    }

    if (type === "tag" && typeof target === 'string') {
      return allSnippets.filter(snippet => snippet.tags.includes(target));
    }

    return <Snippet[]>[];
  }

  function smartGroupFilter(target: string): Snippet[] {
    if (target === "all") return allSnippets
    if (target === "uncategorized") return allSnippets.filter(snippet => snippet.folderID === 0)
    if (target === "recent") return recentSnippets

    return <Snippet[]>[];
  }

  useEffect(() => {
    setDirectorySnippets(directoryFilter(type, target))
  }, [type, target, allSnippets])

  return directorySnippets;
}

export default useDirectorySnippets;