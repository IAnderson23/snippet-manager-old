
export interface Folder {
  id?: number
  name: string
  order: number
  isFavorite: boolean
}

export interface Snippet {
  id?: number
  folderID: number
  name: string
  tags: string[]
  isFavorite: boolean
  lastViewed: number
  created: number
}

export interface Fragment {
  id?: number
  snippetID: number
  name: string
  code: string
  language: string
  order: number
}

export const folderSchema: Folder = {
  id: undefined,
  name: "",
  order: 0,
  isFavorite: false,
}

export const snippetSchema: Snippet = {
  id: undefined,
  folderID: 0,
  name: "",
  tags: [],
  isFavorite: false,
  lastViewed: Date.now(),
  created: Date.now(),
}

export const fragmentSchema: Fragment = {
  id: undefined,
  snippetID: 0,
  name: "Fragment",
  code: 'console.log("Hello World");',
  language: "Javascript",
  order: 0,
}