import {atom} from "jotai";

import {snippetIDAtom} from "./snippet-id.atom";
import {allSnippetsAtom} from "./all-snippets.atom";

export const snippetAtom = atom(get => {
  let allSnippets = get(allSnippetsAtom);
  let snippetID = get(snippetIDAtom);

  return snippetID ? allSnippets.find(snippet => snippet.id === snippetID) : {};
})