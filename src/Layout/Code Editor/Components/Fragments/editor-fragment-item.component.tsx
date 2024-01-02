import {useAtom} from "jotai";
import {fragmentIdAtom} from "../../../../Atoms/Fragment/fragment-id.atom";
import {Fragment} from "../../../../Database/database-types";

function EditorFragmentItem({fragment}: {fragment: Fragment}) {
  const [fragmentID, setFragmentID] = useAtom(fragmentIdAtom);
  function isActive(target: number) {
    return fragmentID === target ? "active" : "";
  }

  return (
    <li key={fragment.id}
      className={"fragment-item " + isActive(fragment.id!)}
      onClick={() => setFragmentID(fragment.id!)}>
      <p>{fragment.name}</p>
    </li>
  )
}

export default EditorFragmentItem;