import {useAtom, useAtomValue} from "jotai";
import {allFoldersAtom} from "../../../Atoms/Directory/all-folders.atom";
import {snippetIDAtom} from "../../../Atoms/Snippet/snippet-id.atom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {updateSnippet} from "../../../Database/CRUD/snippet.crud";
import {useEffect, useState} from "react";

dayjs.extend(relativeTime);

function SnippetItem({snippet}) {
  const [snippetID, setSnippetID] = useAtom(snippetIDAtom);
  const [lastViewed, setLastViewed] = useState("")
  const allFolders = useAtomValue(allFoldersAtom);

  useEffect(() => {
    setLastViewed(dayjs(snippet.lastViewed).fromNow())
  }, [snippet])

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLastViewed(dayjs(snippet.lastViewed).fromNow())
    }, 60000)

    return () => {
      clearTimeout(timeout);
    }
  }, [lastViewed, snippet.lastViewed])

  function getFolderName(folderID) {
    const folder = allFolders.find(folder => folder.id === folderID);
    return folder?.name || "Uncategorized"
  }

  function isActive(target) {
    return snippetID === target ? "active" : "";
  }

  function onClickHandler(target) {
    const newSnippet = {...snippet, lastViewed: Date.now()}
    updateSnippet(newSnippet.id, newSnippet);
    setSnippetID(target)
  }

  return (
    <li key={snippet.id} className={"snippet-item " + isActive(snippet.id)} onClick={() => onClickHandler(snippet.id)}>
      <div className={"item-header"}>
        <h4>{snippet.name}</h4>
        <h5>{getFolderName(snippet.folderID)}</h5>
        <h5>Last viewed {lastViewed}</h5>
      </div>
    </li>
  )
}

export default SnippetItem;