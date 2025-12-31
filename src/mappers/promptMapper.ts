import type { PromptDetailResponse, PromptListItemResponse } from '../apis/prompts/prompts.types';
import type { PromptDTO } from '../mocks/prompts';

const mapPromptItemDTO = (item: PromptListItemResponse): PromptDTO => ({
  id: item.id,
  title: item.title,
  description: item.body,
  category: '기타',
  tags: '프롬프트',
  views: item.viewCount,
  createdAt: item.createdAt.slice(0, 10),
  author: {
    id: item.authorAccountId,
    name: item.isAnonymous ? '익명' : '작성자',
  },
});

export const mapPromptListItemDTO = (item: PromptListItemResponse): PromptDTO =>
  mapPromptItemDTO(item);

export const mapPromptDetailDTO = (response: PromptDetailResponse): PromptDTO =>
  mapPromptItemDTO(response.data);
