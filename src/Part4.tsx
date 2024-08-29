import { useState } from "react";

const Part4 = (): React.ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <div className="gap-4 flex">
      <input
        type="checkbox"
        name="Highlight Me"
        checked={isChecked}
        onChange={handleClick}
      />
      <p className={isChecked && "bg-yellow-300"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quas nisi
        ipsa numquam, possimus laborum id tenetur voluptas aliquam nam amet
        debitis obcaecati! Accusamus provident pariatur voluptates sequi alias
        soluta!
      </p>
    </div>
  );
};

export default Part4;
