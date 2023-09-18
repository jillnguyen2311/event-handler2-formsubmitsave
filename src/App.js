import "./styles.css";
import Editor from "./components/Editor";
import Output from "./components/Output";

export default function App() {
  function handleClick(event) {
    const element = event.currentTarget;
    element.remove();
  }

  return (
    <div className="App">
      <div onClick={handleClick}>
        <span className="delete"> X </span>Item 1
      </div>
      <div onClick={handleClick}>
        <span className="delete"> X </span>Item 2
      </div>
      <div onClick={handleClick}>
        <span className="delete"> X </span>Item 3
      </div>

      <div>
        <Editor />
        <Output />
      </div>
    </div>
  );
}
