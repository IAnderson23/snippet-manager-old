import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {useAtom} from "jotai";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";
import {mdiArchiveOutline, mdiHelpCircleOutline, mdiHistory} from '@mdi/js';
import Icon from '@mdi/react';

function DefaultSmartGroup() {
  const [directory, setDirectory] = useAtom(directoryAtom);

  function activeChecker(target: string) {
    return directory.type === "smartGroup" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target: string) {
    setDirectory(directoryConstructor.smartGroup(target));
  }

  return (
    <>
      <li className={"directory-item " + activeChecker("all")}>
        <div className={"item-header"} onClick={() => onClickHandler("all")}>
          <Icon className={"item-icon"} path={mdiArchiveOutline}/>
          <p className={"item-name"}>All Snippets</p>
        </div>
      </li>
      <li className={"directory-item " + activeChecker("uncategorized")}>
        <div className={"item-header"} onClick={() => onClickHandler("uncategorized")}>
          <Icon className={"item-icon"} path={mdiHelpCircleOutline}/>
          <p className={"item-name"}>Uncategorized</p>
        </div>
      </li>
      <li className={"directory-item " + activeChecker("recent")}>
        <div className={"item-header"} onClick={() => onClickHandler("recent")}>
          <Icon className={"item-icon"} path={mdiHistory}/>
          <p className={"item-name"}>Recent</p>
        </div>
      </li>
    </>
  )
}

export default DefaultSmartGroup;