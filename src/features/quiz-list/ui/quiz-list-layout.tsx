export const QuizListLayout = ({
  header,
  filter,
  list,
}: {
  header?: React.ReactNode;
  filter?: React.ReactNode;
  list?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-10 py-6">
      <div className="flex flex-col gap-4">
        {header}
        {filter}
      </div>
      {list}
    </div>
  );
};
