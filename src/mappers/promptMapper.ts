import type { PromptDetailResponse, PromptListItemResponse } from '../apis/prompts/prompts.types';

export type PromptDTO = {
  id: number;
  title: string;
  prompt: string;
  description: string;
  category: string;
  tags: string[];
  views: number;
  createdAt: string;
  tip: string | null;
  copies: number;
  sourceUrl: string | null;
  author: {
    id: number;
    name: string;
  };
};

const mapPromptItemDTO = (item: PromptListItemResponse): PromptDTO => {
  const { id, author, content, stats, tags } = item;

  return {
    id: id,
    title: content.title,
    prompt: content.prompt,
    description: content.description,
    sourceUrl: content.sourceUrl,
    tip: content.tip,
    createdAt: content.createdAt.slice(0, 10),
    views: stats.viewCount,
    copies: stats.copyCount,
    author: {
      id: author.id,
      name: author.isAnonymous ? '익명' : author.nickname,
    },
    category: tags.categories[0]?.name || '기타',
    tags: tags.platforms.map((p) => p.name),
  };
};

export const mapPromptListItemDTO = (item: PromptListItemResponse): PromptDTO =>
  mapPromptItemDTO(item);

export const mapPromptDetailDTO = (response: PromptDetailResponse): PromptDTO =>
  mapPromptItemDTO(response.data);
