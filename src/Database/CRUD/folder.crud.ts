import {db} from "../datebase-init";
import {Folder} from "../database-schema";

export function createFolder(folder: Folder) {
  db.folders.add(folder).then(success).catch(error)

  function success(id: number): void {
    console.log(`Folder ${id} Was Created`)
  }

  function error(e: unknown): void {
    console.log(typeof e)
    console.log(`Error Creating Folder: ${e}`)
  }
}

export function updateFolder(folderID: Folder["id"], updatedData: Folder): void {
  db.folders.update(folderID, updatedData).then(updated => {
    if (updated)
      console.log(`Folder ${folderID} Was Updated`)
    else
      console.log(`Error: No Folder With A ID Of ${folderID}`)
  })
}

export function deleteFolder(folderID: Folder["id"]): void {
  db.folders.delete(folderID).then(success).catch(error);

  function success(): void {
    console.log(`Folder ${folderID} Was Deleted`)
  }

  function error(): void {
    console.log(`Error: Invalid ID Given`)
  }
}