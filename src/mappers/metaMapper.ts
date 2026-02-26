import type { MetaItemResponse } from '@/services';

import type { SelectOption } from './mapper.types';

export const mapToSelectOptions = (
  data: MetaItemResponse[],
): SelectOption[] => {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
    slug: item.slug,
  }));
};
