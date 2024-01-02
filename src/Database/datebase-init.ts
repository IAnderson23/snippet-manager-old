import Dexie, {Table} from "dexie";
import {Folder, Fragment, Snippet} from "./database-types";


class MyDexie extends Dexie {
    folders!: Table<Folder, number>
    snippets!: Table<Snippet, number>
    fragments!: Table<Fragment, number>

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