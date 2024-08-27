type Part2Props = {
  name: string;
  className?: string;
};

const Part2 = ({ name, className }: Part2Props): React.ReactElement => {
  return <div className={className}>{name}</div>;
};

export default Part2;
