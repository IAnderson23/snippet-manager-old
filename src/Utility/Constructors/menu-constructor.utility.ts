import {Folder, folderSchema, Fragment, fragmentSchema, Snippet, snippetSchema} from "../../Database/database-schema";

export interface Menu {
  type: string
  subType: string
  target: Folder | Snippet | Fragment | undefined
}

export const menuConstructor = {
  default: (): Menu => {
    return {type: "", subType: "", target: undefined}
  },
  create: {
    folder: (): Menu => {
      return {type: "create", subType: "folder", target: folderSchema}
    },
    snippet: (): Menu => {
      return {type: "create", subType: "snippet", target: snippetSchema}
    },
    fragment: (): Menu => {
      return {type: "create", subType: "fragment", target: fragmentSchema}
    },
  },
  edit: {
    folder: (target: Folder): Menu => {
      return {type: "edit", subType: "folder", target: target}
    },
    snippet: (target: Snippet): Menu => {
      return {type: "edit", subType: "snippet", target: target}
    },
    fragment: (target: Fragment): Menu => {
      return {type: "edit", subType: "fragment", target: target}
    },
  },
  delete: {
    folder: (target: Folder): Menu => {
      return {type: "delete", subType: "folder", target: target}
    },
    snippet: (target: Snippet): Menu => {
      return {type: "delete", subType: "snippet", target: target}
    },
    fragment: (target: Fragment): Menu => {
      return {type: "delete", subType: "fragment", target: target}
    },
  },
}
