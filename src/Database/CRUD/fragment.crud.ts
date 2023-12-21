import {db} from "../datebase-init";
import {Fragment} from "../database-schema";

export function createFragment(fragment: Fragment) {
  db.fragments.add(fragment).then(success).catch(error)

  function success(id) {
    console.log(`Fragment ${id} Was Created`)
  }

  function error(e) {
    console.log(`Error Creating Fragment: ${e}`)
  }
}

export function updateFragment(fragmentID, updatedData) {
  db.fragments.update(fragmentID, updatedData).then(updated => {
    if (updated)
      console.log(`Fragment ${fragmentID} Was Updated`)
    else
      console.log(`Error: No Fragment With A ID Of ${fragmentID}`)
  })
}

export function deleteFragment(fragmentID) {
  db.fragments.delete(fragmentID).then(success).catch(error);

  function success(id) {
    console.log(`Fragment ${id} Was Deleted`)
  }

  function error() {
    console.log(`Error: Invalid ID Given`)
  }
}