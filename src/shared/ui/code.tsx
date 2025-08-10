export const CodeUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="bg-gray-800 text-blue-300 font-mono text-sm px-4 py-3 rounded-lg">
      {children}
    </code>
  );
};
