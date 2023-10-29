import {useAtom} from "jotai";
import {directoryAtom} from "../../../Atoms/Directory/directory.atom";
import {directoryConstructor} from "../../../Utility/Constructors/directory-constructor.utility";
import {smartGroupIcon} from "../../../Assets/svg-icons.asset";

function SmartGroupList() {
  const [directory, setDirectory] = useAtom(directoryAtom);

  function activeChecker(target) {
    return directory.type === "smartGroup" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target) {
    setDirectory(directoryConstructor.smartGroup(target));
  }

  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Smart Groups</h5>
      </div>
      <ul className={"directory-list"}>
        <li className={"directory-item " + activeChecker("all")}>
          <div className={"item-header"} onClick={() => onClickHandler("all")}>
            {smartGroupIcon}
            <p className={"item-name"}>All Snippets</p>
          </div>
        </li>
        <li className={"directory-item " + activeChecker("uncategorized")}>
          <div className={"item-header"} onClick={() => onClickHandler("uncategorized")}>
            {smartGroupIcon}
            <p className={"item-name"}>Uncategorized</p>
          </div>
        </li>
        <li className={"directory-item " + activeChecker("recent")}>
          <div className={"item-header"} onClick={() => onClickHandler("recent")}>
            {smartGroupIcon}
            <p className={"item-name"}>Recent</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SmartGroupList;