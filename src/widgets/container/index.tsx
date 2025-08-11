export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6 md:px-10 xl:px-12 w-full mx-auto min-h-screen">
      {children}
    </div>
  );
};
