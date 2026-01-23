export type PromptDTO = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string;
  views: number;
  createdAt: string;
  author: {
    id: number;
    name: string;
  };
};
