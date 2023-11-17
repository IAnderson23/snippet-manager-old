import SmartGroupList from "./Components/Smart Group/smart-group-list.component";
import FolderList from "./Components/Folder/folder-list.component";
import TagDirectoryList from "./Components/Tag/directory-tag-list.component";


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