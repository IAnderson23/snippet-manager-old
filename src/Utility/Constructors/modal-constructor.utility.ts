import {folderSchema, fragmentSchema, snippetSchema} from "../../Database/database-schema";
import {Folder, Fragment, Snippet} from "../../Database/database-types";
import {Modal} from "../../Atoms/modal-atom";

export const modalConstructor = {
  default: (): Modal => {
    return {type: "", subType: "", target: undefined}
  },
  create: {
    folder: (): Modal => {
      return {type: "create", subType: "folder", target: folderSchema}
    },
    snippet: (): Modal => {
      return {type: "create", subType: "snippet", target: snippetSchema}
    },
    fragment: (): Modal => {
      return {type: "create", subType: "fragment", target: fragmentSchema}
    },
  },
  edit: {
    folder: (target: Folder): Modal => {
      return {type: "edit", subType: "folder", target: target}
    },
    snippet: (target: Snippet): Modal => {
      return {type: "edit", subType: "snippet", target: target}
    },
    fragment: (target: Fragment): Modal => {
      return {type: "edit", subType: "fragment", target: target}
    },
  },
  delete: {
    folder: (target: Folder): Modal => {
      return {type: "delete", subType: "folder", target: target}
    },
    snippet: (target: Snippet): Modal => {
      return {type: "delete", subType: "snippet", target: target}
    },
    fragment: (target: Fragment): Modal => {
      return {type: "delete", subType: "fragment", target: target}
    },
  },
}
