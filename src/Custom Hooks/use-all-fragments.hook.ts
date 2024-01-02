import {useAtom} from "jotai";
import {useEffect} from "react";

import {allFragmentsAtom} from "../Atoms/Fragment/all-fragments.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";
import {Fragment} from "../Database/database-types";

function useAllFragments(): Fragment[] {
  const [allFragments, setAllFragments] = useAtom(allFragmentsAtom);

  const fragments: Fragment[] | undefined = useLiveQuery(() => db.fragments.toArray(), []);

  useEffect(() => {
    if (fragments) setAllFragments(fragments);
  }, [fragments])

  return allFragments;
}

export default useAllFragments;