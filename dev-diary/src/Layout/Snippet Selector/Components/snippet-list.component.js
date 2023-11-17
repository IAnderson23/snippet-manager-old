import SnippetItem from "./snippet-item.component";
import useFilteredSnippets from "../../../Custom Hooks/use-filtered-snippets.hook";

function FilteredSnippetList() {
  const filteredList = useFilteredSnippets();

  return (
    <ul id={"snippet-list"}>
      {filteredList.map((snippet, i) => {
        return <SnippetItem snippet={snippet} key={i} />
      })}
    </ul>
  )
}

export default FilteredSnippetList;