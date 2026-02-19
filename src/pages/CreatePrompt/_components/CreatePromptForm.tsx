import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button/Button';
import FormField from '@/components/Form/FormField';
import { Input } from '@/components/Input/Input';
import { useMetaOptions } from '@/hooks/common/useMetaOptions';
import type { PromptFormValues } from '@/mappers';

import { usePromptFormController } from '../_hooks/usePromptFormController';

interface CreatePromptFormProps {
  promptId?: string;
}

const CreatePromptForm = ({ promptId }: CreatePromptFormProps) => {
  const navigate = useNavigate();

  const { isEditMode, isFetching, isPending, defaultValues, submitHandler } =
    usePromptFormController(promptId);
  const { categoryOptions, platformOptions } = useMetaOptions();

  const { control, register, handleSubmit } = useForm<PromptFormValues>({
    values: defaultValues,
  });

  const safeCategoryOptions = categoryOptions.map((option) => ({
    ...option,
    value: String(option.value),
  }));

  const safePlatformOptions = platformOptions.map((option) => ({
    ...option,
    value: String(option.value),
  }));

  if (isEditMode && isFetching) {
    return (
      <div className="py-10 text-center text-gray-500">
        데이터를 불러오는 중...
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
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
          placeholder="프롬프트 설명을 입력해 주세요"
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
