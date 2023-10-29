import {db} from "../datebase-init";

export async function createFolder(folderData) {
  try {
    const id = await db.folders.add(folderData)
    console.log(`Folder ${id} Was Created`)
  } catch (error) {
    console.log(`Error Creating Folder: ${error}`)
  }
}

export async function updateFolder(folderID, updatedData) {
  try {
    await db.folders.update(folderID, updatedData)
    console.log(`Folder ${folderID} Was Updated`)
  } catch (error) {
    console.log(`Error Updating Folder: ${error}`)
  }
}

export async function deleteFolder(folderID) {
  try {
    await db.folders.delete(folderID);
    console.log(`Folder ${folderID} Was Deleted`)
  } catch (error) {
    console.log(`Error Deleting Folder ${folderID}: ${error}`)
  } finally {
    db.snippets.where("folderID").equals(folderID).modify({folderID: 0});
  }
}

