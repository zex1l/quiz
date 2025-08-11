import {
  ConvexReactClient,
  ConvexProvider as ConvexProviderReact,
} from 'convex/react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export const ConvexProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConvexProviderReact client={convex}>{children}</ConvexProviderReact>;
};
