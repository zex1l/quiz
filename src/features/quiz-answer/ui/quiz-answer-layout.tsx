export const QuizAnswerLayout = ({
  children,
  header,
}: {
  header?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 py-5 lg:p-10">
      {header}
      {children}
    </div>
  );
};
