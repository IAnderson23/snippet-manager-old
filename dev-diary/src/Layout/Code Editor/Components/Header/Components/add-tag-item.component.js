import {startCase} from "lodash";
import {updateSnippet} from "../../../../../Database/CRUD/snippet.crud";
import {useAtomValue} from "jotai";
import {snippetAtom} from "../../../../../Atoms/Snippet/snippet.atom";
import {useState} from "react";

function AddTagItem() {
  const snippet = useAtomValue(snippetAtom);
  const [newTag, setNewTag] = useState("");

  function changeHandler(e) {
    setNewTag(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    const newSnippetTags = {tags: [...snippet.tags, startCase(newTag)]};
    updateSnippet(snippet.id, newSnippetTags).then(res => console.log(res))
    setNewTag("")
  }

  return (
    <form onSubmit={submitHandler}>
      <input required={true} name={"tag"} type={"text"} value={newTag} onChange={changeHandler} onBlur={() => setNewTag("")} />
    </form>
  )
}

export default AddTagItem;