import { useEffect, useState } from 'react';
import { getPromptList } from '../../apis/prompts/getPromptList';
import { mapPromptListItemDTO } from '../../mappers/promptMapper';
import type { PromptDTO } from '../../mocks/prompts';

export const usePromptList = () => {
  const [prompts, setPrompts] = useState<PromptDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPromptList();
        const mappedData = res.data.items.map(mapPromptListItemDTO);

        setPrompts(mappedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { prompts, loading, error };
};
