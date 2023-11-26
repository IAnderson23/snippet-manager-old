import {smartGroupIcon} from "../../../../Assets/svg-icons.asset";
import {directoryConstructor} from "../../../../Utility/Constructors/directory-constructor.utility";
import {useAtom} from "jotai";
import {directoryAtom} from "../../../../Atoms/Directory/directory.atom";

function DefaultSmartGroup() {
  const [directory, setDirectory] = useAtom(directoryAtom);

  function activeChecker(target) {
    return directory.type === "smartGroup" && directory.target === target ? "active" : "";
  }

  function onClickHandler(target) {
    setDirectory(directoryConstructor.smartGroup(target));
  }

  return (
    <>
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
    </>
  )
}

export default DefaultSmartGroup;