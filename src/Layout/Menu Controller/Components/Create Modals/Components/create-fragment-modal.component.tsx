import {useAtom, useAtomValue} from "jotai";
import {modalAtom} from "../../../../../Atoms/modal-atom";
import {snippetIDAtom} from "../../../../../Atoms/Snippet/snippet-id.atom";
import {createFragment} from "../../../../../Database/CRUD/fragment.crud";
import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import FragmentForm from "../../Forms/fragment-form.component";
import {FormEvent} from "react";
import {Fragment} from "../../../../../Database/database-types";

function CreateFragmentModal() {
  const [{target} ,setModal] = useAtom(modalAtom);
  const snippetID = useAtomValue(snippetIDAtom);
  const fragment = {...target, snippetID};

  function submitHandler(e: FormEvent<HTMLFormElement>, fragment: Fragment) {
    e.preventDefault();
    createFragment(fragment);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h3>Create Fragment</h3>
      <FragmentForm initialFragment={fragment as Fragment}
                    submitHandler={submitHandler}
                    modalType={"Create"}/>
    </div>
  )
}

export default CreateFragmentModal;