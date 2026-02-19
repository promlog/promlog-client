import type {
  AuthorInfo,
  PromptDetailResponse,
  PromptListItemResponse,
} from '../services/prompt/prompts.types';

interface PromptMappedDTO {
  author: Omit<AuthorInfo, 'isAnonymous'>;
  tags: {
    category: string[];
    platform: string[];
  };
  stats: {
    likeCount: string | number;
    copyCount: string | number;
    viewCount: string | number;
  };
}

export type PromptDTO = Omit<
  PromptListItemResponse,
  'status' | 'author' | 'tags' | 'stats'
> &
  PromptMappedDTO;

const mapPromptItemDTO = (item: PromptListItemResponse): PromptDTO => {
  const { id, author, content, stats, tags } = item;

  const handleFormattedCount = (count: number) => {
    if (!count) return 0;

    const formattedCount = new Intl.NumberFormat('ko-KR', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(count);

    return formattedCount;
  };

  return {
    id: id,
    content: {
      title: content.title,
      prompt: content.prompt,
      description: content.description,
      sourceUrl: content.sourceUrl,
      tip: content.tip,
      createdAt: content.createdAt.slice(0, 10).replaceAll('-', '.'),
    },
    author: {
      id: author.id,
      nickname: author.isAnonymous ? '익명' : author.nickname,
    },
    stats: {
      likeCount: handleFormattedCount(stats.viewCount),
      copyCount: handleFormattedCount(stats.viewCount),
      viewCount: handleFormattedCount(stats.viewCount),
    },
    tags: {
      category: tags.categories.map((category) => category.name) || '기타',
      platform: tags.platforms.map((platform) => platform.name),
    },
  };
};

export const mapPromptListItemDTO = (item: PromptListItemResponse): PromptDTO =>
  mapPromptItemDTO(item);

export const mapPromptDetailDTO = (response: PromptDetailResponse): PromptDTO =>
  mapPromptItemDTO(response.data);
