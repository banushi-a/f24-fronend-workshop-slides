import { PropsWithChildren } from "react";

const FieldSet = ({ part, children }: PropsWithChildren<{ part: number }>) => {
  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend className="text-sm flex items-centersm">Part {part}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
