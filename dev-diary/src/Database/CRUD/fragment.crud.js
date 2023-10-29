import {db} from "../datebase-init";

export async function createFragment(fragment) {
  try {
    const id = await db.fragments.add(fragment);
    console.log(`Fragment ${id} Was Created`)
  } catch (error) {
    console.log(`Error Creating Fragment: ${error}`)
  }
}

export async function updateFragment(fragmentID, updatedData) {
  try {
    await db.fragments.update(fragmentID, updatedData);
    console.log(`Fragment ${fragmentID} Was Updated`)
  } catch (error) {
    console.log(`Error Updating Fragment ${fragmentID}: ${error}`)
  }
}

export async function deleteFragment(fragmentID) {
  try {
    await db.fragments.delete(fragmentID);
    console.log(`Fragment ${fragmentID} Was Deleted`)
  } catch (error) {
    console.log(`Error Deleting Fragment ${fragmentID}: ${error}`)
  }
}


