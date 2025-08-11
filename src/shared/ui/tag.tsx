import { Tag as TagIcon } from 'lucide-react';

export const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="flex items-center gap-1 bg-purple-50 px-2.5 py-1 rounded-full text-xs text-purple-700">
      <TagIcon className="w-3 h-3" />
      <span>{tag}</span>
    </div>
  );
};
