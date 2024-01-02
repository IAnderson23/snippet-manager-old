import {useAtomValue} from "jotai";

import DeleteFragmentModal from "./Components/delete-fragment-modal.component";
import DeleteSnippetModal from "./Components/delete-snippet-modal.component";
import DeleteFolderModal from "./Components/delete-folder-modal.component";
import {modalAtom} from "../../../../Atoms/modal-atom";

function DeleteModalController() {
  const {subType} = useAtomValue(modalAtom);

  function deleteModalSelector() {
    if (subType === "folder") return <DeleteFolderModal/>
    if (subType === "snippet") return <DeleteSnippetModal/>
    if (subType === "fragment") return <DeleteFragmentModal/>
  }

  const modalTarget = deleteModalSelector();

  return subType && (
    <>
      {modalTarget}
    </>
  )
}

export default DeleteModalController;