import {updateSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {useAtomValue} from "jotai";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {ChangeEvent, FormEvent, useState} from "react";

function AddTagItem() {
  const snippet = useAtomValue(snippetAtom);
  const [newTag, setNewTag] = useState("");

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setNewTag(e.target.value)
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newSnippet = {...snippet, tags: [...snippet.tags, newTag]}
    updateSnippet(snippet.id!, newSnippet)
    setNewTag("")
  }

  return (
    <form onSubmit={submitHandler} id={"add-tag"}>
      <input required={true} name={"tag"} type={"text"} placeholder={"Add Tag..."} value={newTag} onChange={changeHandler} onBlur={() => setNewTag("")} />
    </form>
  )
}

export default AddTagItem;