import FieldSet from "./FieldSet";
import Part1 from "./Part1";
import "./App.css";
import Part2 from "./Part2";

function App() {
  return (
    <div className="flex flex-col gap-4 w-[90vw] m-8">
      <FieldSet part={1}>
        <Part1 />
      </FieldSet>
      <FieldSet part={2}>
        <Part2 name="John Doe" />
        <Part2 name="Jane Doe" className="bg-green-400" />
      </FieldSet>
    </div>
  );
}

export default App;
