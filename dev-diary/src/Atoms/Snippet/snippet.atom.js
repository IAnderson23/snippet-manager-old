import {atom} from "jotai";

import {snippetIDAtom} from "./snippet-id.atom";
import {allSnippetsAtom} from "./all-snippets.atom";
import {snippetSchema} from "../../Database/database-schema";

export const snippetAtom = atom(get => {
  let allSnippets = get(allSnippetsAtom);
  let snippetID = get(snippetIDAtom);

  return snippetID !== 0 ? allSnippets.find(snippet => snippet.id === snippetID) : snippetSchema;
})