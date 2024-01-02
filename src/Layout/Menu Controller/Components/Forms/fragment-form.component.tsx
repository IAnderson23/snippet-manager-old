import {ChangeEvent, FormEvent, useState} from "react";
import {startCase} from "lodash";
import {useSetAtom} from "jotai";

import {modalConstructor} from "../../../../Utility/Constructors/modal-constructor.utility";
import {supportedLanguages} from "../../../../Utility/supported-languages.utility";
import {modalAtom} from "../../../../Atoms/modal-atom";
import {Fragment} from "../../../../Database/database-types";

interface FragmentFormPropTypes {
  initialFragment: Fragment
  submitHandler:(e: FormEvent<HTMLFormElement>, fragment: Fragment) => void
  modalType: string
}


function FragmentForm({initialFragment, submitHandler, modalType}: FragmentFormPropTypes) {
  const setModal = useSetAtom(modalAtom);
  const [fragment, setFragment] = useState(initialFragment);
  const languageOptionList = supportedLanguages.map((language, i) => <option value={language} key={i}>{startCase(language)}</option>)

  function changeHandler(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    setFragment({...fragment, [e.target.name]: e.target.value});
  }

  function invalidHandler(e: FormEvent<HTMLInputElement>) {
    const inputElement = e.target as HTMLInputElement

    inputElement.setCustomValidity("Please Enter At Least 2 Characters")
  }

  function cancelHandler() {
    setModal(modalConstructor.default)
  }

  return (
    <form onSubmit={e => submitHandler(e, fragment)}>
      <label>
        Name
        <input name={"name"}
               value={fragment.name}
               pattern={".{2,}"}
               required={true}
               autoFocus={true}
               onChange={changeHandler}
               onInvalid={invalidHandler}/>
      </label>
      <label>
        Language
        <select name={"language"} defaultValue={fragment.language} onChange={changeHandler}>
          {languageOptionList}
        </select>
      </label>
      <button className={"submit"} type={"submit"}>{modalType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default FragmentForm;