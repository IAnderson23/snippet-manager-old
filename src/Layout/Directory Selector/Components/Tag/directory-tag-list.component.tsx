import useUniqueTags from "../../../../Custom Hooks/use-unique-tags.hook";
import DirectoryTagItem from "./directory-tag-item.component";
import {ReactElement} from "react";

function DirectoryTagList(): ReactElement {
  const uniqueTags = useUniqueTags()

  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Tags</h5>
      </div>
      <ul className={"directory-list"}>
        {uniqueTags.map((tag, index) => {
          return <DirectoryTagItem key={index} tag={tag} />
        })}
      </ul>
    </div>
  )
}

export default DirectoryTagList;