import {db} from "../datebase-init";
import {Snippet} from "../database-types";
import {IndexableType} from "dexie";


export function createSnippet(snippet: Snippet): void {
  db.snippets.add(snippet).then(success).catch(error);

  function success(id: IndexableType): void {
    console.log(`Snippet ${id} Was Created`);
  }

  function error(e: any): void {
    console.log(`Error Creating Snippet: ${e}`);
  }
}

export function updateSnippet(snippetID: number, updatedData: Snippet): void {
  db.snippets.update(snippetID, updatedData).then(updated => {
    if (updated)
      console.log(`Snippet ${snippetID} Was Updated`);
    else
      console.log(`Error: No Snippet With A ID Of ${snippetID}`);
  })
}

export function deleteSnippet(snippetID: number): void {
  db.snippets.delete(snippetID).then(success)

  function success(): void {
    console.log(`Snippet ${snippetID} Was Deleted`);
  }
}