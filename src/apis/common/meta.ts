import { API } from '../../config/api';
import type { MetaItemResponse } from './meta.types';

export const getCategories = async (): Promise<MetaItemResponse[]> => {
  const { data } = await API.get('/api/categories');

  return data.data;
};

export const getPlatforms = async (): Promise<MetaItemResponse[]> => {
  const { data } = await API.get('/api/platforms');

  return data.data;
};
