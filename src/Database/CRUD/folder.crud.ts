import {db} from "../datebase-init";

import {IndexableType} from "dexie";
import {Folder} from "../database-types";

export function createFolder(folder: Folder): void {
  db.folders.add(folder).then(success).catch(error)

  function success(id: IndexableType): void {
    console.log(`Folder ${id} Was Created`)
  }

  function error(e: unknown): void {
    console.log(`Error Creating Folder: ${e}`)
  }
}

export function updateFolder(folderID: number, updatedData: Folder): void {
  db.folders.update(folderID, updatedData).then(updated => {
    if (updated)
      console.log(`Folder ${folderID} Was Updated`)
    else
      console.log(`Error: No Folder With A ID Of ${folderID}`)
  })
}

export function deleteFolder(folderID: number): void {
  db.folders.delete(folderID).then(success);

  function success(): void {
    console.log(`Folder ${folderID} Was Deleted`)
  }
}