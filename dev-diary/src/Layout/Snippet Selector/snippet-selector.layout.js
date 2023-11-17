import SnippetSearchBar from "./Components/snippet-search-bar.component";
import AddSnippetButton from "./Components/add-snippet-button.component";
import SnippetList from "./Components/snippet-list.component";

function SnippetSelector() {
    return (
      <div id={"snippet-selector"}>
        <div id={"snippet-selector-header"}>
          <SnippetSearchBar />
          <AddSnippetButton />
        </div>
        <SnippetList />
      </div>
    )
}

export default SnippetSelector;