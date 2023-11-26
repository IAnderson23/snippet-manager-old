import FragmentForm from "../../Forms/fragment-form.component";
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import {updateFragment} from "../../../../../Database/CRUD/fragment.crud";
import {useAtomValue, useSetAtom} from "jotai";
import {menuAtom} from "../../../../../Atoms/menu-atom";

function EditFragmentMenu() {
  const setMenu = useSetAtom(menuAtom);
  const {target: fragment} = useAtomValue(menuAtom)

  function submitHandler(e, fragment) {
    e.preventDefault();
    updateFragment(fragment.id, {...fragment, name: fragment.name});
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Edit Fragment</h3>
      <FragmentForm initialFragment={fragment}
                    submitHandler={submitHandler}
                    menuType={"Edit"}/>
    </div>
  );
}

export default EditFragmentMenu;