import {folderSchema, fragmentSchema, snippetSchema} from "../../Database/database-schema";

export const popupConstructor = {
  default: {type: "", subType: "", target: {}},
  create: {
    folder: () => {
      return {type: "create", subType: "folder", target: folderSchema}
    },
    snippet: () => {
      return {type: "create", subType: "snippet", target: snippetSchema}
    },
    fragment: () => {
      return {type: "create", subType: "fragment", target: fragmentSchema}
    },
  },
  edit: {
    folder: (target) => {
      return {type: "edit", subType: "folder", target: target}
    },
    snippet: (target) => {
      return {type: "edit", subType: "snippet", target: target}
    },
    fragment: (target) => {
      return {type: "edit", subType: "fragment", target: target}
    },
  },
  delete: {
    folder: (target) => {
      return {type: "delete", subType: "folder", target: target}
    },
    snippet: (target) => {
      return {type: "delete", subType: "snippet", target: target}
    },
    fragment: (target) => {
      return {type: "delete", subType: "fragment", target: target}
    },
  },
}
