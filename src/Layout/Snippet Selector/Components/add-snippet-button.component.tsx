import Icon from '@mdi/react';
import {mdiPlus} from '@mdi/js';
import {useSetAtom} from "jotai";

import {modalConstructor} from "../../../Utility/Constructors/modal-constructor.utility";
import {modalAtom} from "../../../Atoms/modal-atom";

function AddSnippetButton() {
  const setModal = useSetAtom(modalAtom);

  return (
    <button id={"create-snippet-button"} onClick={() => setModal(modalConstructor.create.snippet())}>
      <Icon path={mdiPlus} size={1}/>
    </button>
  )
}

export default AddSnippetButton;