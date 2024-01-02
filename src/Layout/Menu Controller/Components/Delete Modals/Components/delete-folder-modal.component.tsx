import {isEqual} from "lodash";
import {useAtom} from "jotai";

import {directoryConstructor} from "../../../../../Utility/Constructors/directory-constructor.utility";
import {modalConstructor} from "../../../../../Utility/Constructors/modal-constructor.utility";
import {directoryAtom} from "../../../../../Atoms/Directory/directory.atom";
import {deleteFolder} from "../../../../../Database/CRUD/folder.crud";
import {modalAtom} from "../../../../../Atoms/modal-atom";

function DeleteFolderModal() {
  const [directory, setDirectory] = useAtom(directoryAtom);
  const [{target: folder}, setModal] = useAtom(modalAtom);

  function deleteHandler() {
    deleteFolder(folder!.id!)
    if (isEqual(directory, {type: "folder", target: folder!.id}))
      setDirectory(directoryConstructor.default);
    setModal(modalConstructor.default);
  }

  function cancelHandler() {
    setModal(modalConstructor.default);
  }

  return (
    <div className={"modal"}>
      <h2>Are you sure you want to permanently remove {folder!.name}?</h2>
      <button className={"submit"} type={"button"} onClick={deleteHandler}>Delete</button>
      <button className={"cancel"} type={"button"} onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default DeleteFolderModal;