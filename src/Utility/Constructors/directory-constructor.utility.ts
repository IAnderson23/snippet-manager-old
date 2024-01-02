import {Directory} from "../../Atoms/Directory/directory.atom";

export const directoryConstructor = {
  default: (): Directory => {
    return {type: "smartGroup", target: "all"}
  },
  folder: (target: number): Directory => {
    return {type: "folder", target: target}
  },
  tag: (target: string): Directory => {
    return {type: "tag", target: target}
  },
  smartGroup: (target: string): Directory => {
    return {type: "smartGroup", target: target}
  }
}
