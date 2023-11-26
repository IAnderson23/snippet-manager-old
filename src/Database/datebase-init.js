import Dexie from "dexie";

export const db = new Dexie("dev-diary-db");

db.version(1).stores({
    folders: "++id, &name, order, isFavorite",
    snippets: "++id, folderID, name, *tags, isFavorite, lastViewed",
    fragments: "++id, snippetID, name, code, language, order"
})

