import type { CreatePromptRequest } from '@/services';

import type { PromptFormValues } from './mapper.types';
import type { PromptDTO } from './promptMapper';

/**
 * 프롬프트 등록/수정 시 폼 초기값을 변환하는 함수입니다.
 * @param promptData 상세 프롬프트 데이터 (선택)
 * @returns 폼 초기값
 */
export const mapToFormValues = (
  promptData: PromptDTO | null,
): PromptFormValues => {
  if (!promptData) {
    return {
      title: '',
      category: '',
      platform: '',
      body: '',
      description: '',
      source: '',
      tips: '',
      anonymous: false,
    };
  }

  const { content, tags, author } = promptData;

  return {
    title: content.title,
    body: content.prompt,
    description: content.description ?? '',
    source: content.sourceUrl ?? '',
    tips: content.tip ?? '',
    anonymous: author.isAnonymous,
    category: String(tags.categoryIds[0] ?? ''),
    platform: String(tags.platformIds[0] ?? ''),
  };
};

export const mapToPromptRequest = (
  values: PromptFormValues,
): CreatePromptRequest => {
  return {
    title: values.title,
    prompt: values.body,
    description: values.description,
    tip: values.tips,
    sourceUrl: values.source?.startsWith('https://') ? values.source : null,
    isAnonymous: values.anonymous,
    categoryIds: [Number(values.category)],
    platformIds: [Number(values.platform)],
  };
};
