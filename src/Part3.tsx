import Part2 from "./Part2";

const names = ["Bob", "Kevin", "Stuart"];

const Part3 = (): React.ReactElement => {
  return (
    <>
      {names.map((name: string, index: number) => {
        return <Part2 name={name} key={index + name} />;
      })}
    </>
  );
};

export default Part3;
