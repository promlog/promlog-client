export type PromptDTO = {
  id: number;
  title: string;
  prompt: string;
  description: string;
  category: string;
  tags: string;
  views: number;
  createdAt: string;
  tip: string | null;
  sourceUrl: string | null;
  author: {
    id: number;
    name: string;
  };
};
