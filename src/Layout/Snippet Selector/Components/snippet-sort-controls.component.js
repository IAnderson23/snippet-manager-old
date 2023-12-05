import {useAtom} from "jotai";
import {sortConfigAtom} from "../../../Atoms/sort-config.atom";
import Icon from '@mdi/react';
import { mdiSortAscending } from '@mdi/js';
import { mdiSortDescending } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

function SnippetSortControls() {
  const [{sortBy, isAscending}, setSortConfig] = useAtom(sortConfigAtom);

  function onClickHandler() {
    setSortConfig({sortBy, isAscending: !isAscending});
  }

  function onChangeHandler(e) {
    let value = e.target.value;
    setSortConfig({sortBy: value, isAscending})
  }

  return (
    <div id={"snippet-control"}>
      <button onClick={onClickHandler}><Icon path={isAscending ? mdiSortAscending : mdiSortDescending} size={1}/></button>
      <div id={"sort-select-container"}>
        <select defaultValue={"lastViewed"} onChange={onChangeHandler}>
          <option value={"lastViewed"}>Last Viewed</option>
          <option value={"name"}>Name</option>
        </select>
        <Icon path={mdiChevronDown} size={1} />
      </div>
    </div>
  )
}

export default SnippetSortControls;
