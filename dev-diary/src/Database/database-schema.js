
export const folderSchema = {
  name: "",
  order: 0,
  isFavorite: false,
}

export const snippetSchema = {
  folderID: 0,
  name: "",
  tags: [],
  isFavorite: false,
  lastViewed: new Date()
}

export const fragmentSchema = {
  snippetID: 0,
  name: "Fragment",
  code: 'console.log("Hello World");',
  language: "Javascript",
  order: 0,
}