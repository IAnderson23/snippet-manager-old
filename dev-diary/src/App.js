import DirectorySelector from './Layout/Directory Selector/directory-selector.layout';
import SnippetSelector from './Layout/Snippet Selector/snippet-selector.layout';
import MenuController from "./Layout/Menu Controller/menu-controller.layout";
import CodeEditor from './Layout/Code Editor/code-editor.layout';
import "./Sass/app.sass"

function App() {
  return (
    <div id="app">
      <DirectorySelector />
      <SnippetSelector />
      <CodeEditor />
      <MenuController/>
    </div>
  );
}

export default App;
