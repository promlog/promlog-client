export interface AuthorInfo {
  id: number;
  nickname: string;
  isAnonymous: boolean;
}

export interface PromptContent {
  title: string;
  description: string;
  prompt: string;
  tip: string;
  sourceUrl: string | null;
  createdAt: string;
}

export interface PromptStats {
  likeCount: number;
  viewCount: number;
  copyCount: number;
}

export interface TagInfo {
  id: number;
  name: string;
  slug: string;
}

export interface PromptTags {
  categories: TagInfo[];
  platforms: TagInfo[];
}

// prompt list
export interface PromptListItemResponse {
  id: number;
  status: string;
  author: AuthorInfo;
  content: PromptContent;
  stats: PromptStats;
  tags: PromptTags;
}

export interface PromptListMeta {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
}

export interface PromptListResponse {
  success: boolean;
  data: {
    items: PromptListItemResponse[];
    meta: PromptListMeta;
  };
}

export interface GetPromptListParams {
  sort?: 'latest' | 'oldest';
  page?: number;
  size?: number;
}

// prompt detail
export interface PromptDetailResponse {
  success: boolean;
  data: PromptListItemResponse;
}

// increment copy count
export interface CopyPromptResponse {
  success: boolean;
  data: {
    copyCount: number;
    promptId: number;
  };
}

// create prompt
export interface CreatePromptRequest {
  title: string;
  description: string;
  prompt: string;
  tip: string;
  sourceUrl: string;
  isAnonymous: boolean;
  categoryIds: number[];
  platformIds: number[];
}

export interface CreatePromptResponse {
  success: boolean;
}
