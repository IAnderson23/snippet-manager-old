import {folderSchema, fragmentSchema, snippetSchema} from "./Database/database-schema";
import {db} from "./Database/datebase-init";

const devTools = {
  init() {
    db.delete();
    db.open();

    const folderNames = ["React", "Vue", "Algorithms"];

    const folders = folderNames.map((name) => {
      return {...folderSchema, name: name}
    })

    const snippetNames = ["Quick Start", "Custom Hooks", "Quick Start", "Sorting Functions", "Math Operations", "No Fragments Test"];
    const folderIDs = [1, 1, 2, 3, 0, 0];
    const tags = [["JavaScript", "Quick Start"], ["JavaScript"], ["JavaScript", "Quick Start"], ["C++"], ["C++"], ["Test"]]

    const snippets = snippetNames.map((name, i) => {
      return {...snippetSchema, folderID: folderIDs[i], name: name, tags: tags[i]}
    })

    const snippetIDs = [1, 2, 3, 4, 5, 5, 5, 5];
    const fragmentCode = [
      "function ReactQuickStart() {\n" + "  console.log(\"hi\");\n" + "}",
      "function ReactCustomHook() {\n" + "  console.log(\"hi\");\n" + "}",
      "function VueQuickStart() {\n" + "  console.log(\"hi\");\n" + "}",
      "function AlgorithmsSortingFunction() {\n" + "  console.log(\"hi\");\n" + "}",
      "function add(a, b) {\n" + "  return a + b;\n" + "}",
      "function subtract(a, b) {\n" + "  return a - b;\n" + "}",
      "function multiply(a, b) {\n" + "  return a * b;\n" + "}",
      "function divide(a, b) {\n" + "  return a / b;\n" + "}"]

    const fragments = snippetIDs.map((id, i) => {
      return {...fragmentSchema, snippetID: id, code: fragmentCode[i], order: i+1}
    })

    db.folders.bulkPut(folders);
    db.snippets.bulkPut(snippets);
    db.fragments.bulkPut(fragments);

    console.log("Database Initialized")
  }
}

export default devTools;