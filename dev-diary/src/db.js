import Dexie from "dexie";

export const db = new Dexie("dev-diary-db");

db.version(1).stores({
    folder: "++id, name",
    snippet: "++id, folderID, name, *tags",
    fragment: "++id, snippetID, name"
})
