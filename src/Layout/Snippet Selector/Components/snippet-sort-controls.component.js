import {useAtom} from "jotai";
import Icon from '@mdi/react';
import { mdiSortAscending, mdiSortDescending, mdiChevronDown} from '@mdi/js';

import {sortConfigAtom} from "../../../Atoms/sort-config.atom";


function SnippetSortControls() {
  const [{sortBy, isAscending}, setSortConfig] = useAtom(sortConfigAtom);

  function onClickHandler() {
    setSortConfig({sortBy, isAscending: !isAscending});
  }

  return (
    <div id={"snippet-control"}>
      <button onClick={onClickHandler}><Icon path={isAscending ? mdiSortAscending : mdiSortDescending} size={1}/></button>
      <div id={"sort-select-container"}>
        <select defaultValue={"recent"}>
          <option value={"recent"}>Last Viewed</option>
          <option value={"name"}>Name</option>
        </select>
        <Icon path={mdiChevronDown} size={1} />
      </div>
    </div>
  )
}

export default SnippetSortControls;
