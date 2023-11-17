import DefaultSmartGroup from "./default-smart-group-items.component";

function SmartGroupList() {

  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Smart Groups</h5>
      </div>
      <ul className={"directory-list"}>
        <DefaultSmartGroup />
      </ul>
    </div>
  )
}

export default SmartGroupList;