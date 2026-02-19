import type { GetPromptListParams } from '@/services';

export const QUERY_KEY = {
  PROMPT: {
    ALL: ['prompts'] as const,

    // 1. List
    LISTS: ['prompts', 'list'] as const,
    LIST: (params: GetPromptListParams) => ['prompts', 'list', params] as const,

    // 2. Detail
    DETAILS: ['prompts', 'detail'] as const,
    DETAIL: (id: number) => ['prompts', 'detail', id] as const,

    // 3. ME
    ME: ['prompts', 'me'] as const,
  },
  ACTION: {
    LIKES: ['prompts', 'likes'] as const,
  },
};
