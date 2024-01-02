import SnippetSortControls from "./Components/snippet-sort-controls.component";
import SnippetSearchBar from "./Components/snippet-search-bar.component";
import AddSnippetButton from "./Components/add-snippet-button.component";
import SnippetList from "./Components/snippet-list.component";

function SnippetSelector() {
    return (
      <div id={"snippet-selector"}>
        <SnippetSearchBar />
        <div id={"snippet-control-container"}>
          <SnippetSortControls />
          <AddSnippetButton />
        </div>
        <SnippetList />
      </div>
    )
}

export default SnippetSelector;