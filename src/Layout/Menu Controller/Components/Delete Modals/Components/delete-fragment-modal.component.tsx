import {useAtom} from "jotai";

import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {fragmentIdAtom} from "../../../../../Atoms/Fragment/fragment-id.atom";
import {deleteFragment} from "../../../../../Database/CRUD/fragment.crud";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function DeleteFragmentModal() {
  const [fragmentID, setFragmentID] = useAtom(fragmentIdAtom)
  const [{target: fragment}, setModal] = useAtom(modalAtom);

  function deleteHandler() {
    setFragmentID(0);
    deleteFragment(fragmentID);
    setModal(modalConstructor.default)
  }

  function cancelHandler() {
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h2>Are you sure you want to permanently remove {fragment!.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default DeleteFragmentModal;