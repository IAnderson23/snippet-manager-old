import {db} from "../datebase-init";
import {Snippet} from "../database-schema";

export function createSnippet(snippet: Snippet) {
  db.snippets.add(snippet).then(success).catch(error);

  function success(id): void {
    console.log(`Snippet ${id} Was Created`);
  }

  function error(e): void {
    console.log(`Error Creating Snippet: ${e}`);
  }
}

export function updateSnippet(snippetID, updatedData) {
  db.snippets.update(snippetID, updatedData).then(updated => {
    if (updated)
      console.log(`Snippet ${snippetID} Was Updated`);
    else
      console.log(`Error: No Snippet With A ID Of ${snippetID}`);
  })
}

export function deleteSnippet(snippetID) {
  db.snippets.delete(snippetID).then(success).catch(error);

  function success(id) {
    console.log(`Snippet ${id} Was Deleted`);
  }

  function error() {
    console.log(`Error: Invalid ID Given`);
  }
}