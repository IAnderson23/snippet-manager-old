import FragmentForm from "../../Forms/fragment-form.component";
import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {updateFragment} from "../../../../../Database/CRUD/fragment.crud";
import {modalAtom} from "../../../../../Atoms/modal-atom";
import {useAtom} from "jotai/index";
import {FormEvent} from "react";
import {Fragment} from "../../../../../Database/database-types";

function EditFragmentModal() {
  const [{target: fragment}, setModal] = useAtom(modalAtom);

  function submitHandler(e: FormEvent<HTMLFormElement>, fragment: Fragment) {
    e.preventDefault();
    updateFragment(fragment.id!, fragment);
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h3>Edit Fragment</h3>
      <FragmentForm initialFragment={fragment as Fragment}
                    submitHandler={submitHandler}
                    modalType={"Edit"}/>
    </div>
  );
}

export default EditFragmentModal;