import {Folder, folderSchema, Fragment, fragmentSchema, Snippet, snippetSchema} from "./Database/database-schema";
import {db} from "./Database/datebase-init";
import {createFolder} from "./Database/CRUD/folder.crud";

const devTools = {
  init(): void {
    db.delete();
    db.open();

    const folderNames: string[] = ["React", "Vue", "Algorithms", "Order Test"];

    const folders: Folder[] = folderNames.map((name: string): Folder => {
      return {...folderSchema, name: name}
    })

    //const snippetNames = ["a", "e", "b", "d", "c", "f", "2", "1", "3"];
    //const snippetNames = ["1", "2", "3", "4", "5", "6"];
    const snippetNames: string[] = ["Quick Start", "Custom Hooks", "Quick Start", "Sorting Functions", "Math Operations", "No Fragments Test", "2", "1", "3", "6", "Recent Test"];
    const folderIDs: number[] = [1, 1, 2, 3, 0, 0, 4, 4, 4, 0, 0];
    const tags: string[][] = [["JavaScript", "Quick Start"], ["JavaScript"], ["JavaScript", "Quick Start"], ["C++"], ["C++"], ["Test"], ["Test"], ["Test"], ["Test"], ["Test"], ["Test"]]

    const snippets: Snippet[] = snippetNames.map((name: string, i: number): Snippet => {
      return {...snippetSchema, folderID: folderIDs[i], name: name, tags: tags[i]}
    })

    const snippetIDs: number[] = [1, 2, 3, 4, 5, 5, 5, 5];
    const fragmentCode: string[] = [
      "function ReactQuickStart() {\n" + "  console.log(\"hi\");\n" + "}",
      "function ReactCustomHook() {\n" + "  console.log(\"hi\");\n" + "}",
      "function VueQuickStart() {\n" + "  console.log(\"hi\");\n" + "}",
      "function AlgorithmsSortingFunction() {\n" + "  console.log(\"hi\");\n" + "}",
      "function add(a, b) {\n" + "  return a + b;\n" + "}",
      "function subtract(a, b) {\n" + "  return a - b;\n" + "}",
      "function multiply(a, b) {\n" + "  return a * b;\n" + "}",
      "function divide(a, b) {\n" + "  return a / b;\n" + "}"]

    const fragments: Fragment[] = snippetIDs.map((id: number, i: number): Fragment => {
      return {...fragmentSchema, snippetID: id, code: fragmentCode[i], order: i+1}
    })

    db.folders.bulkPut(folders);
    db.snippets.bulkPut(snippets);
    db.fragments.bulkPut(fragments);

    console.log("Database Initialized")
  },
  addErrorTest(): void {
    const folder1: Folder = {...folderSchema, id: 1, name: "Add Error Test"}
    const folder2: Folder = {...folderSchema, id: 1, name: "Add Error Test 2"}

    createFolder(folder1)
    createFolder(folder2)
  },
}

export default devTools;