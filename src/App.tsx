import FieldSet from "./FieldSet";
import Part1 from "./Part1";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-4 w-[90vw] m-8">
      <FieldSet>
        <Part1 />
      </FieldSet>
    </div>
  );
}

export default App;
