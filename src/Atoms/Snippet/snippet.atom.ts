import {atom} from "jotai";

import {snippetIDAtom} from "./snippet-id.atom";
import {allSnippetsAtom} from "./all-snippets.atom";
import {Snippet, snippetSchema} from "../../Database/database-schema";

export const snippetAtom = atom<Snippet>(get => {
  let allSnippets: Snippet[] = get(allSnippetsAtom);
  let snippetID = get(snippetIDAtom);

  return snippetID !== 0 ? allSnippets.find((snippet: Snippet) => snippet.id === snippetID) : snippetSchema;
})