import {db} from "../datebase-init";

export async function createSnippet(snippetData) {
  try {
    const id = await db.snippets.add(snippetData)
    console.log(`Snippet ${id} Was Created`)
  } catch (error) {
    console.log(`Error Creating Snippet: ${error}`)
  }
}

export async function updateSnippet(snippetID, updatedData) {
  try {
    await db.snippets.update(snippetID, updatedData);
    console.log(`Snippet ${snippetID} Was Updated`)
  } catch (error) {
    console.log(`Error Updating Snippet ${snippetID}: ${error}`)
  }
}

export async function deleteSnippet(snippetID) {
  try {
    await db.snippets.delete(snippetID);
    console.log(`Snippet ${snippetID} Was Deleted`)
  } catch (error) {
    console.log(`Error Deleting Snippet ${snippetID}: ${error}`)
  } finally {
    db.fragments.where("snippetID").equals(snippetID).delete();
  }
}

