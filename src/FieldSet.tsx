import { PropsWithChildren } from "react";

const FieldSet = ({ children }: PropsWithChildren<object>) => {
  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend className="text-sm flex items-centersm">Part 1</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
