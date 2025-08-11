import { LoaderCircle } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <LoaderCircle className="animate-spin text-purple-900" />
    </div>
  );
};
