import {Folder, Fragment, Snippet} from "./database-types";

export const folderSchema: Folder = {
  name: "",
  order: 0,
  isFavorite: false,
}

export const snippetSchema: Snippet = {
  folderID: 0,
  name: "",
  tags: [],
  isFavorite: false,
  lastViewed: Date.now(),
  created: Date.now(),
}

export const fragmentSchema: Fragment = {
  snippetID: 0,
  name: "Fragment",
  code: 'console.log("Hello World");',
  language: "Javascript",
  order: 0,
}