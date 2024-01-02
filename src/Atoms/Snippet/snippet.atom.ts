import {atom} from "jotai";

import {snippetIDAtom} from "./snippet-id.atom";
import {allSnippetsAtom} from "./all-snippets.atom";
import {Snippet} from "../../Database/database-types";
import {snippetSchema} from "../../Database/database-schema";


export const snippetAtom = atom<Snippet>(get => {
  const allSnippets: Snippet[] = get(allSnippetsAtom);
  const snippetID = get(snippetIDAtom);

  return snippetID ? allSnippets.find((snippet: Snippet) => snippet.id === snippetID)! : snippetSchema;
})