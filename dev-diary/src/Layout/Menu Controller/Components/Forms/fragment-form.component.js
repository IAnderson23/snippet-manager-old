import {useState} from "react";
import {startCase} from "lodash";
import {useSetAtom} from "jotai";

import {menuConstructor} from "../../../../Utility/Constructors/menu-constructor.utility";
import {supportedLanguages} from "../../../../Utility/supported-languages.utility";
import {menuAtom} from "../../../../Atoms/menu-atom";

function FragmentForm({initialFragment, submitHandler, menuType}) {
  const setMenu = useSetAtom(menuAtom);
  const [fragment, setFragment] = useState(initialFragment);
  const languageOptionList = supportedLanguages.map((language, i) => <option value={language} key={i}>{startCase(language)}</option>)

  function changeHandler(e) {
    setFragment({...fragment, [e.target.name]: e.target.value});
  }

  function invalidHandler(e) {
    e.target.setCustomValidity("Please Enter At Least 2 Characters")
  }

  function cancelHandler() {
    setMenu(menuConstructor.default)
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
      <button className={"submit"} type={"submit"}>{menuType}</button>
      <button className={"cancel"} type={"reset"} onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default FragmentForm;