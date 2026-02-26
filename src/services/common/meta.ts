import { API } from '@/config/instance';
import { META_API } from '@/constants';

import type { MetaItemResponse } from './meta.types';

export const getCategories = async (): Promise<MetaItemResponse[]> => {
  const { data } = await API.get(META_API.CATEGORIES);

  return data.data;
};

export const getPlatforms = async (): Promise<MetaItemResponse[]> => {
  const { data } = await API.get(META_API.PLATFORMS);

  return data.data;
};
