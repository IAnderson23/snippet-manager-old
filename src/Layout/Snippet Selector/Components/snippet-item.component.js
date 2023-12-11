import dayjs from "dayjs";
import {useAtom, useAtomValue} from "jotai";
import relativeTime from "dayjs/plugin/relativeTime";

import useRecentSnippets from "../../../Custom Hooks/useRecentSnippets.hook";
import {allFoldersAtom} from "../../../Atoms/Directory/all-folders.atom";
import {snippetIDAtom} from "../../../Atoms/Snippet/snippet-id.atom";

dayjs.extend(relativeTime);

function SnippetItem({snippet}) {
  const [snippetID, setSnippetID] = useAtom(snippetIDAtom);
  const allFolders = useAtomValue(allFoldersAtom);
  const {updateRecentSnippets} = useRecentSnippets()

  function getFolderName(folderID) {
    const folder = allFolders.find(folder => folder.id === folderID);
    return folder?.name || "Uncategorized"
  }

  function isActive(target) {
    return snippetID === target ? "active" : "";
  }

  function onClickHandler(snippet) {
    updateRecentSnippets(snippet)
    setSnippetID(snippet.id)
  }

  return (
    <li key={snippet.id} className={"snippet-item " + isActive(snippet.id)} onClick={() => onClickHandler(snippet)}>
      <div className={"item-content"}>
        <h4 className={"snippet-name"}>{snippet.name}</h4>
        <h5 className={"folder-name"}>{getFolderName(snippet.folderID)}</h5>
        <h5 className={"created-date"}>{dayjs(snippet.created).fromNow()}</h5>
      </div>
    </li>
  )
}

export default SnippetItem;