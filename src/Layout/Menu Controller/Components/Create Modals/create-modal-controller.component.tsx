import {useAtomValue} from "jotai";
import {modalAtom} from "../../../../Atoms/modal-atom";
import CreateFolderModal from "./Components/create-folder-modal.component";
import CreateSnippetModal from "./Components/create-snippet-modal.component";
import CreateFragmentModal from "./Components/create-fragment-modal.component";
import {ReactNode} from "react";

function CreateModalController() {
  const {subType} = useAtomValue(modalAtom);

  function createModalSelector(): ReactNode {
    if (subType === "folder") return <CreateFolderModal/>
    if (subType === "snippet") return <CreateSnippetModal/>
    if (subType === "fragment") return <CreateFragmentModal/>
  }

  const modalTarget = createModalSelector();

  return subType && (
    <>
      {modalTarget}
    </>
  )
}

export default CreateModalController;