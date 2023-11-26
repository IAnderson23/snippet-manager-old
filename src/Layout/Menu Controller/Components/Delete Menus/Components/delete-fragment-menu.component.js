import {useAtom, useAtomValue, useSetAtom} from "jotai";

import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {fragmentIdAtom} from "../../../../../Atoms/Fragment/fragment-id.atom";
import {deleteFragment} from "../../../../../Database/CRUD/fragment.crud";
import {fragmentAtom} from "../../../../../Atoms/Fragment/fragment.atom";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function DeleteFragmentMenu() {
  const [fragmentID, setFragmentID] = useAtom(fragmentIdAtom)
  const setMenu = useSetAtom(menuAtom);
  const fragment = useAtomValue(fragmentAtom);

  function deleteHandler() {
    deleteFragment(fragmentID);
    setFragmentID(0);
    setMenu(menuConstructor.default)
  }

  function cancelHandler() {
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h2>Are you sure you want to permanently remove {fragment.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default DeleteFragmentMenu;