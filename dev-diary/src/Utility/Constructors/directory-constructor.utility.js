
export const directoryConstructor = {
  default: {type: "smartGroup", target: "all"},
  folder: (target) => {
    return {type: "folder", target: target}
  },
  tag: (target) => {
    return {type: "tag", target: target}
  },
  smartGroup: (target) => {
    return {type: "smartGroup", target: target}
  }
}
