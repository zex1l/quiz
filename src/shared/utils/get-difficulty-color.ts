export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'intermediate':
      return 'bg-green-100 text-green-800';
    case 'advanced':
      return 'bg-yellow-100 text-yellow-800';
    case 'expert':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-purple-100 text-purple-800';
  }
};
