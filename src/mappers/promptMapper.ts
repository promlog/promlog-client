import type { PromptDetailResponse, PromptListItemResponse } from '../apis/prompts/prompts.types';
import type { PromptDTO } from '../mocks/prompts';

const mapPromptItemDTO = (item: PromptListItemResponse): PromptDTO => ({
  id: item.id,
  title: item.title,
  prompt: item.prompt,
  description: item.description,
  sourceUrl: item.sourceUrl,
  category: '기타',
  tags: '프롬프트',
  views: item.viewCount,
  tip: item.tip,
  createdAt: item.createdAt.slice(0, 10),
  author: {
    id: item.authorAccountId,
    name: item.isAnonymous ? '익명' : item.authorNickname,
  },
});

export const mapPromptListItemDTO = (item: PromptListItemResponse): PromptDTO =>
  mapPromptItemDTO(item);

export const mapPromptDetailDTO = (response: PromptDetailResponse): PromptDTO =>
  mapPromptItemDTO(response.data);
