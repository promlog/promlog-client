import { useEffect, useState } from 'react';

import { getPromptDetail } from '../../apis/prompts/prompts';
import { type PromptDTO, mapPromptDetailDTO } from '../../mappers/promptMapper';

export const usePromptDetail = (promptId: number | null) => {
  const [promptData, setPromptData] = useState<PromptDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (promptId == null) return;

    (async () => {
      try {
        const response = await getPromptDetail(promptId);
        const mapped = mapPromptDetailDTO(response);

        setPromptData(mapped);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [promptId]);

  return { promptData, loading, error };
};
