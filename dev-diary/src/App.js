import DirectorySelector from './Layout/Directory Selector/directory-selector.layout';
import SnippetSelector from './Layout/Snippet Selector/snippet-selector.layout';
import CodeEditor from './Layout/Code Editor/code-editor.layout';

function App() {
  return (
    <div className="app">
      <DirectorySelector />
      <SnippetSelector />
      <CodeEditor />
    </div>
  );
}

export default App;
