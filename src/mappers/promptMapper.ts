import type { PromptDetailResponse, PromptListItemResponse } from '@/services';

interface PromptMappedDTO {
  tags: {
    category: string[];
    platform: string[];
    categoryIds: number[];
    platformIds: number[];
  };
  stats: {
    likeCount: string | number;
    copyCount: string | number;
    viewCount: string | number;
    isLiked: boolean;
    isBookmarked: boolean;
  };
}

export type PromptDTO = Omit<
  PromptListItemResponse,
  'status' | 'tags' | 'stats'
> &
  PromptMappedDTO;

const mapPromptItemDTO = (item: PromptListItemResponse): PromptDTO => {
  const { id, author, content, stats, tags } = item;

  const handleFormattedCount = (count: number) => {
    if (!count) return 0;
    return new Intl.NumberFormat('ko-KR', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(count);
  };

  return {
    id: id,
    content: {
      ...content,
      createdAt: content.createdAt.slice(0, 10).replaceAll('-', '.'),
    },
    author: {
      id: author.id,
      nickname: author.isAnonymous ? '익명' : author.nickname,
      isAnonymous: author.isAnonymous,
    },
    stats: {
      likeCount: handleFormattedCount(stats.likeCount),
      copyCount: handleFormattedCount(stats.copyCount),
      viewCount: handleFormattedCount(stats.viewCount),
      isLiked: stats.isLiked,
      isBookmarked: stats.isBookmarked,
    },
    tags: {
      category: tags.categories.map((c) => c.name) || ['기타'],
      platform: tags.platforms.map((p) => p.name),

      categoryIds: tags.categories.map((c) => c.id),
      platformIds: tags.platforms.map((p) => p.id),
    },
  };
};

export const mapPromptListItemDTO = (item: PromptListItemResponse): PromptDTO =>
  mapPromptItemDTO(item);
export const mapPromptDetailDTO = (response: PromptDetailResponse): PromptDTO =>
  mapPromptItemDTO(response.data);
