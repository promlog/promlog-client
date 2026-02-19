import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button/Button';
import FormField from '@/components/Form/FormField';
import { Input } from '@/components/Input/Input';
import { useCreatePrompt, useUpdatePrompt } from '@/hooks';

import { getPromptDetail } from '../../../apis/prompts/prompts';
import { useMetaOptions } from '../../../hooks/common/useMetaOptions';

interface PromptFormValues {
  title: string;
  category: string;
  platform: string;
  body: string;
  description: string;
  source: string;
  tips: string;
  anonymous: boolean;
}

interface CreatePromptFormProps {
  promptId?: string;
  isEditMode?: boolean;
}

const CreatePromptForm = ({
  promptId,
  isEditMode = false,
}: CreatePromptFormProps) => {
  const navigate = useNavigate();

  const { categoryOptions, platformOptions } = useMetaOptions();

  const { mutate: createMutate, isPending: isCreating } = useCreatePrompt();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdatePrompt();

  const isPending = isCreating || isUpdating;

  const { control, register, handleSubmit, reset } = useForm<PromptFormValues>({
    defaultValues: {
      anonymous: false,
      category: '',
      platform: '',
    },
  });

  const safeCategoryOptions = categoryOptions.map((opt) => ({
    ...opt,
    value: String(opt.value),
  }));

  const safePlatformOptions = platformOptions.map((opt) => ({
    ...opt,
    value: String(opt.value),
  }));

  const { data: promptData, isLoading: isFetching } = useQuery({
    queryKey: ['prompt', promptId],
    queryFn: () => getPromptDetail(Number(promptId)),
    enabled: isEditMode && !!promptId,
  });

  useEffect(() => {
    if (isEditMode && promptData) {
      const categoryId = promptData.data.tags.categories[0]?.id ?? '';
      const platformId = promptData.data.tags.platforms[0]?.id ?? '';

      reset({
        title: promptData.data.content.title,
        category: String(categoryId),
        platform: String(platformId),
        body: promptData.data.content.prompt,
        description: promptData.data.content.description,
        source: promptData.data.content.sourceUrl || '',
        tips: promptData.data.content.tip || '',
        anonymous: promptData.data.author.isAnonymous,
      });
    }
  }, [promptData, isEditMode, reset]);

  const onSubmit = (formValues: PromptFormValues) => {
    const categoryId = Number(formValues.category);
    const platformId = Number(formValues.platform);

    const formattedSourceUrl = formValues.source?.startsWith('https://')
      ? formValues.source
      : null;

    const prompt = {
      title: formValues.title,
      description: formValues.description,
      prompt: formValues.body,
      tip: formValues.tips,
      sourceUrl: formattedSourceUrl,
      isAnonymous: formValues.anonymous,
      categoryIds: [categoryId],
      platformIds: [platformId],
    };

    if (isEditMode && promptId) {
      updateMutate({
        promptId: Number(promptId),
        prompt: prompt,
      });
    } else {
      createMutate(prompt);
    }
  };

  if (isEditMode && isFetching) {
    return (
      <div className="py-10 text-center text-gray-500">
        데이터를 불러오는 중...
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <FormField htmlFor="title" label="제목" required>
        <Input.InputField
          id="title"
          placeholder="프롬프트 제목을 입력해 주세요"
          {...register('title', { required: '제목은 필수입니다.' })}
        />
      </FormField>
      <FormField htmlFor="category" label="카테고리" required>
        <Controller
          control={control}
          name="category"
          rules={{ required: true }}
          render={({ field }) => (
            <Input.SelectField
              {...field}
              placeholder="카테고리를 선택하세요"
              options={safeCategoryOptions}
              onValueChange={field.onChange}
            />
          )}
        />
      </FormField>
      <FormField htmlFor="platform" label="플랫폼" required>
        <Controller
          control={control}
          name="platform"
          rules={{ required: true }}
          render={({ field }) => (
            <Input.SelectField
              {...field}
              placeholder="플랫폼을 선택하세요"
              options={safePlatformOptions}
              onValueChange={field.onChange}
            />
          )}
        />
      </FormField>
      <FormField htmlFor="body" label="프롬프트 내용" required>
        <Input.TextField
          id="body"
          placeholder="프롬프트 내용을 입력해 주세요"
          {...register('body', { required: true })}
        />
      </FormField>
      <FormField htmlFor="description" label="설명">
        <Input.TextField
          id="description"
          placeholder="프롬프트 내용을 입력해 주세요"
          {...register('description')}
        />
      </FormField>
      <FormField htmlFor="source" label="출처">
        <Input.InputField
          id="source"
          placeholder="링크를 입력해 주세요. (본인이라면 작성자로 표기)"
          {...register('source')}
        />
      </FormField>
      <FormField htmlFor="tips" label="팁">
        <Input.InputField
          id="tips"
          placeholder="프롬프트 사용 팁을 입력해 주세요"
          {...register('tips')}
        />
      </FormField>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="anonymous"
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
          {...register('anonymous')}
        />
        <label htmlFor="anonymous" className="text-gray-700 cursor-pointer">
          익명으로 등록
        </label>
      </div>
      <div className="flex items-center gap-3 pt-4">
        <Button
          className="w-full"
          variant="secondary"
          type="button"
          onClick={() => navigate(-1)}
          disabled={isPending}
        >
          취소
        </Button>
        <Button
          className="w-full"
          variant="primary"
          type="submit"
          disabled={isPending}
        >
          {isPending ? '저장 중...' : isEditMode ? '수정하기' : '등록하기'}
        </Button>
      </div>
    </form>
  );
};

export default CreatePromptForm;
