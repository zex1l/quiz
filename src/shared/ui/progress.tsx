export const Progress = ({
  currentValue,
  maxValue,
}: {
  currentValue: number;
  maxValue: number;
}) => {
  const style: React.CSSProperties = {
    width: `${(currentValue / maxValue) * 100}%`,
  };

  return (
    <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700 h-2.5 overflow-hidden">
      <div
        style={style}
        className="h-2.5 bg-primary rounded-full dark:bg-primary transition-all duration-500"
      ></div>
    </div>
  );
};
