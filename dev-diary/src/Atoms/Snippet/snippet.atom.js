import {atom} from "jotai";

import {snippetIDAtom} from "./snippet-id.atom";
import {snippetListAtom} from "./snippet-list.atom";

export const snippetAtom = atom(get => {
  let allSnippets = get(snippetListAtom);
  let snippetID = get(snippetIDAtom);

  return snippetID ? allSnippets.find(snippet => snippet.id === snippetID) : {};
})