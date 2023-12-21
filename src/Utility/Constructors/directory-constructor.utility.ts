import {Folder} from "../../Database/database-schema";

export interface Directory {
  type: string
  target: Folder | string
}

export const directoryConstructor = {
  default: (): Directory => {
    return {type: "smartGroup", target: "all"}
  },
  folder: (target: Folder): Directory => {
    return {type: "folder", target: target}
  },
  tag: (target: string): Directory => {
    return {type: "tag", target: target}
  },
  smartGroup: (target: string): Directory => {
    return {type: "smartGroup", target: target}
  }
}
