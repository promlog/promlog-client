// prompt list
export interface PromptListItemResponse {
  id: number;
  authorAccountId: number;
  authorNickname: string;
  title: string;
  description: string;
  prompt: string;
  tip: string;
  sourceUrl: string | null;
  isAnonymous: boolean;
  status: 'ACTIVE' | 'HIDDEN' | 'DELETED';
  likeCount: number;
  viewCount: number;
  copyCount: number;
  createdAt: string;
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
  sort?: 'latest';
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
