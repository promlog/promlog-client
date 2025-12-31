import { useEffect, useState } from 'react';
import type { PromptDTO } from '../../mocks/prompts';
import { getPromptDetail } from '../../apis/prompts/prompts';
import { mapPromptDetailDTO } from '../../mappers/promptMapper';

export const usePromptDetail = (promptId: number | null) => {
  const [prompt, setPrompt] = useState<PromptDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (promptId == null) return;

    (async () => {
      try {
        const response = await getPromptDetail(promptId);
        const mapped = mapPromptDetailDTO(response);

        setPrompt(mapped);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [promptId]);

  return { prompt, loading, error };
};
