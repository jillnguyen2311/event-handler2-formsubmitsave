function Editor() {
  function addContent(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;
    parent.appendChild(element);
  }

  function addHeading(event) {
    event.preventDefault();
    const form = document.querySelector(".editor");
    const output = document.querySelector(".output");
    const data = new FormData(form);
    const content = data.get("heading");
    addContent("h2", content, output);
    event.target.previousSibling.value = "";
  }

  function addPara(event) {
    event.preventDefault();
    const form = document.querySelector(".editor");
    const output = document.querySelector(".output");
    const data = new FormData(form);
    const content = data.get("para");
    addContent("p", content, output);
    event.target.previousSibling.value = "";
  }

  return (
    <form className="editor">
      <fieldset>
        <legend>create a heading</legend>
        <input type="text" name="heading" />
        <button className="save" onClick={addHeading}>
          Save
        </button>
      </fieldset>

      <fieldset>
        <legend>create a paragraph</legend>
        <textarea name="para" rows="20" cols="50" placeholder="type here..." />
        <button className="save" onClick={addPara}>
          Save
        </button>
      </fieldset>
    </form>
  );
}

export default Editor;
