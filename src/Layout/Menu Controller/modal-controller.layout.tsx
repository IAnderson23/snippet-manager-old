import {useAtomValue} from "jotai";

import CreateModalController from "./Components/Create Modals/create-modal-controller.component";
import DeleteModalController from "./Components/Delete Modals/delete-modal-controller.component";
import EditModalController from "./Components/Edit Modals/edit-modal-controller.conmponent";
import {modalAtom} from "../../Atoms/modal-atom";

function ModalController() {
  const {type} = useAtomValue(modalAtom);

  function modalSelector() {
    if (type === "create") return <CreateModalController />
    if (type === "edit") return <EditModalController />
    if (type === "delete") return <DeleteModalController />
  }

  const modalTarget = modalSelector();

  return type && (
    <div id={"modal-container"}>
      {modalTarget}
    </div>
  )
}

export default ModalController;