import Icon from '@mdi/react';
import {startCase} from "lodash";
import { mdiMagnify } from '@mdi/js';
import {useEffect, useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";

import {directoryAtom} from "../../../Atoms/Directory/directory.atom";
import {userQueryAtom} from "../../../Atoms/user-query.atom";

function SnippetSearchBar() {
  const setSnippetQuery = useSetAtom(userQueryAtom);
  const directory = useAtomValue(directoryAtom)
  const [search, setSearch] = useState("");

  function changeHandler(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setSnippetQuery(startCase(search))
  }, [search])

  useEffect(() => {
    setSearch("")
  }, [directory])

  return (
    <div id={"snippet-search"}>
      <Icon path={mdiMagnify} size={1} />
      <input placeholder={"Search..."} value={search} onChange={changeHandler} style={{textTransform: "capitalize"}} />
    </div>
  )
}

export default SnippetSearchBar;