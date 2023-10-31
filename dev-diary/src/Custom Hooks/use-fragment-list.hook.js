import {useAtom} from "jotai";

import {fragmentListAtom} from "../Atoms/Fragment/fragment-list.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";

function useFragmentList() {
  const [fragmentList, setFragmentList] = useAtom(fragmentListAtom);

  const newList = useLiveQuery(() => db.fragments.toArray(), [], []);

  setFragmentList(newList);

  return fragmentList;
}

export default useFragmentList;