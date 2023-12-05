import SnippetItem from "./snippet-item.component";
import useSortedSnippets from "../../../Custom Hooks/use-sorted-snippets.hook";


function SnippetList() {
  const snippets = useSortedSnippets();

  return (
    <ul id={"snippet-list"}>
      {snippets.map((snippet, i) => {
        return <SnippetItem snippet={snippet} key={i} />
      })}
    </ul>
  )
}

export default SnippetList;