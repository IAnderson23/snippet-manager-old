
export const folderSchema = {
  id: undefined,
  name: "",
  order: 0,
  isFavorite: false,
}

export const snippetSchema = {
  id: undefined,
  folderID: 0,
  name: "",
  tags: [],
  isFavorite: false,
  lastViewed: new Date().getTime()
}

export const fragmentSchema = {
  id: undefined,
  snippetID: 0,
  name: "Fragment",
  code: 'console.log("Hello World");',
  language: "Javascript",
  order: 0,
}