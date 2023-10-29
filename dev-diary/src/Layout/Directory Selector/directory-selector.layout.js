import SmartGroupList from "./Components/smart-group-list.component";
import FolderList from "./Components/Folder/folder-list.component";
import TagDirectoryList from "./Components/tag-directory-list.component";


function DirectorySelector() {

  return (
    <div id={"directory-selector"}>
      <SmartGroupList />
      <FolderList/>
      <TagDirectoryList/>
    </div>
  )
}

export default DirectorySelector;