import {useAtomValue, useSetAtom} from "jotai";
import {menuAtom} from "../../../../../Atoms/menu-atom";
import {snippetIDAtom} from "../../../../../Atoms/Snippet/snippet-id.atom";
import {fragmentSchema} from "../../../../../Database/database-schema";
import {createFragment} from "../../../../../Database/CRUD/fragment.crud";
import {menuConstructor} from "../../../../../Utility/Constructors/menu-constructor.utility";
import FragmentForm from "../../Forms/fragment-form.component";

function CreateFragmentMenu() {
  const setMenu = useSetAtom(menuAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const fragment = {...fragmentSchema, snippetID};

  function submitHandler(e, fragment) {
    e.preventDefault();
    createFragment(fragment);
    setMenu(menuConstructor.default);
  }

  return (
    <div className={"menu"}>
      <h3>Create Fragment</h3>
      <FragmentForm initialFragment={fragment}
                    submitHandler={submitHandler}
                    menuType={"Create"}/>
    </div>
  )
}

export default CreateFragmentMenu;