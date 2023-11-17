import useUniqueTags from "../../../../Custom Hooks/use-unique-tags.hook";
import DirectoryTagItem from "./directory-tag-item.component";

function DirectoryTagList() {
  const uniqueTags = useUniqueTags()



  return (
    <div className={"directory-list-container"}>
      <div className={"list-header"}>
        <h5 className={"list-name"}>Tags</h5>
      </div>
      <ul>
        {uniqueTags.map((tag, i) => {
          return <DirectoryTagItem key={i} tag={tag} />
        })}
      </ul>
    </div>
  )
}

export default DirectoryTagList;