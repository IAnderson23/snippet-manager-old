import {useAtom, useAtomValue} from "jotai";
import {allFoldersAtom} from "../../../Atoms/Directory/all-folders.atom";
import {snippetIDAtom} from "../../../Atoms/Snippet/snippet-id.atom";

function SnippetItem({snippet}) {
  const [snippetID, setSnippetID] = useAtom(snippetIDAtom);
  const allFolders = useAtomValue(allFoldersAtom);

  function getFolderName(folderID) {
    const folder = allFolders.find(folder => folder.id === folderID);
    return folder?.name || "Uncategorized"
  }

  function isActive(target) {
    return snippetID === target ? "active" : "";
  }

  function onClickHandler(target) {
    setSnippetID(target)
  }

  return (
    <li key={snippet.id} className={"snippet-item " + isActive(snippet.id)} onClick={() => onClickHandler(snippet.id)}>
      <div className={"item-header"}>
        <h4>{snippet.name}</h4>
        <h5>{getFolderName(snippet.folderID)}</h5>
      </div>
    </li>
  )
}

export default SnippetItem;