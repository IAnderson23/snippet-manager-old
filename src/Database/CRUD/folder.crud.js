import {db} from "../datebase-init";

export function createFolder(folderData) {
  db.folders.add(folderData).then(success).catch(error)

  function success(id) {
    console.log(`Folder ${id} Was Created`)
  }

  function error(e) {
    console.log(`Error Creating Folder: ${e}`)
  }
}

export function updateFolder(folderID, updatedData) {
  db.folders.update(folderID, updatedData).then(updated => {
    if (updated)
      console.log(`Folder ${folderID} Was Updated`)
    else
      console.log(`Error: No Folder With A ID Of ${folderID}`)
  })
}

export function deleteFolder(folderID) {
  db.folders.delete(folderID).then(success).catch(error);

  function success(id) {
    console.log(`Folder ${id} Was Deleted`)
  }

  function error() {
    console.log(`Error: Invalid ID Given`)
  }
}