import {useAtom} from "jotai";

import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import Icon from '@mdi/react';
import {mdiTagOutline} from '@mdi/js';

function DirectoryTagItem({tag}: {tag: string}) {
  const [directory, setDirectory] = useAtom(directoryAtom);

  function activeChecker(target: string) {
    return directory.type === "tag" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target: string) {
    setDirectory(directoryConstructor.tag(target))
  }

  return (
    <li className={"directory-item " + activeChecker(tag)}>
      <div className={"item-header"} onClick={() => onClickHandler(tag)}>
        <Icon className={"item-icon"} path={mdiTagOutline}/>
        <p className={"item-name"}>{tag}</p>
      </div>
    </li>
  )
}

export default DirectoryTagItem;