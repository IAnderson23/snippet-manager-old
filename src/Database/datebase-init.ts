import Dexie, {Table} from "dexie";
import {Folder, Snippet, Fragment} from "./database-schema";

class MyDexie extends Dexie {
    folders!: Table<Folder>
    snippets!: Table<Snippet>
    fragments!: Table<Fragment>

    constructor() {
        super("myDatabase");

        this.version(1).stores({
            folders: "++id, &name, order, isFavorite",
            snippets: "++id, folderID, name, *tags, isFavorite, lastViewed",
            fragments: "++id, snippetID, name, code, language, order"
        })
    }
}

export const db = new MyDexie();