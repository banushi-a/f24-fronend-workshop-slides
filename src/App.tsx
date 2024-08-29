import FieldSet from "./FieldSet";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";

import "./App.css";

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
      <FieldSet part={3}>
        <Part3 />
      </FieldSet>
      <FieldSet part={4}>
        <Part4 />
      </FieldSet>
    </div>
  );
}

export default App;
