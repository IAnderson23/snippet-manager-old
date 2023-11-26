import {useAtom} from "jotai";
import {useEffect, useState} from "react";

import {allFragmentsAtom} from "../Atoms/Fragment/all-fragments.atom";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../Database/datebase-init";

function useAllFragments() {
  const [allFragments, setAllFragments] = useAtom(allFragmentsAtom);
  const [isLoaded, setIsLoaded] = useState(false);

  const fragments = useLiveQuery(() => db.fragments.toArray(), []);

  useEffect(() => {
    if (fragments) {
      setAllFragments(fragments);
      setIsLoaded(true)
    }
  }, [fragments])

  return {isLoaded, data: allFragments};
}

export default useAllFragments;