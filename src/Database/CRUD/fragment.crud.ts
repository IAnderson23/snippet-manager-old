import {db} from "../datebase-init";
import {Fragment} from "../database-types";
import {IndexableType} from "dexie";


export function createFragment(fragment: Fragment):void {
  db.fragments.add(fragment).then(success).catch(error)

  function success(id: IndexableType): void {
    console.log(`Fragment ${id} Was Created`)
  }

  function error(e: any): void {
    console.log(`Error Creating Fragment: ${e}`)
  }
}

export function updateFragment(fragmentID: number, updatedData: Fragment): void {
  db.fragments.update(fragmentID, updatedData).then(updated => {
    if (updated)
      console.log(`Fragment ${fragmentID} Was Updated`)
    else
      console.log(`Error: No Fragment With A ID Of ${fragmentID}`)
  })
}

export function deleteFragment(fragmentID: number): void {
  db.fragments.delete(fragmentID).then(success)

  function success(): void {
    console.log(`Fragment ${fragmentID} Was Deleted`)
  }
}