import { useMemo } from 'react';

import { useCreatePrompt, usePromptDetail, useUpdatePrompt } from '@/hooks';
import {
  type PromptFormValues,
  mapToFormValues,
  mapToPromptRequest,
} from '@/mappers';

export const usePromptFormController = (promptId?: string) => {
  const isEditMode = !!promptId;
  const parsedPromptId = promptId ? Number(promptId) : null;

  const { detailedPrompt, loading: isFetching } =
    usePromptDetail(parsedPromptId);

  const { mutate: createPrompt, isPending: isCreating } = useCreatePrompt();
  const { mutate: updatePrompt, isPending: isUpdating } = useUpdatePrompt();

  const isPending = isCreating || isUpdating;

  const defaultValues = useMemo(
    () => mapToFormValues(detailedPrompt),
    [detailedPrompt],
  );

  const submitHandler = (formValues: PromptFormValues) => {
    const requestPayload = mapToPromptRequest(formValues);

    if (isEditMode && parsedPromptId) {
      updatePrompt({ promptId: parsedPromptId, prompt: requestPayload });
    } else {
      createPrompt(requestPayload);
    }
  };

  return {
    isEditMode,
    isFetching,
    isPending,
    defaultValues,
    submitHandler,
  };
};
