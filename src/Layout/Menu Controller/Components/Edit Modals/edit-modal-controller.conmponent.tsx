import {useAtomValue} from "jotai";

import EditFragmentModal from "./Components/edit-fragment-modal.component";
import EditSnippetModal from "./Components/edit-snippet-modal.component";
import EditFolderModal from "./Components/edit-folder-modal.component";
import {modalAtom} from "../../../../Atoms/modal-atom";


function EditModalController() {
  const {subType} = useAtomValue(modalAtom);

  function editModalSelector() {
    if (subType === "folder") return <EditFolderModal/>
    if (subType === "snippet") return <EditSnippetModal/>
    if (subType === "fragment") return <EditFragmentModal/>
  }

  const modalTarget = editModalSelector();

  return subType && (
    <>
      {modalTarget}
    </>
  )
}

export default EditModalController;