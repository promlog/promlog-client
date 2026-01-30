import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import FormField from '../../../components/Form/FormField';
import { Input } from '../../../components/Input/Input';

import useCreatePrompt from '../../../hooks/prompts/useCreatePrompt';
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

const CreatePromptForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreatePrompt();
  const { register, handleSubmit } = useForm<PromptFormValues>({
    defaultValues: {
      anonymous: false,
      category: '',
      platform: '',
    },
  });

  const { categoryOptions, platformOptions } = useMetaOptions();

  const onSubmit = (prompt: PromptFormValues) => {
    const categoryId = Number(prompt.category);
    const platformId = Number(prompt.platform);

    const formattedSourceUrl = prompt.source?.startsWith('https://') ? prompt.source : null;

    mutate({
      title: prompt.title,
      description: prompt.description,
      prompt: prompt.body,
      tip: prompt.tips,
      sourceUrl: formattedSourceUrl,
      isAnonymous: prompt.anonymous,
      categoryIds: [categoryId],
      platformIds: [platformId],
    });
  };

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
        <Input.SelectField
          id="category"
          options={[{ value: -1, label: '카테고리를 선택하세요' }, ...categoryOptions]}
          {...register('category', { required: true })}
        />
      </FormField>
      <FormField htmlFor="platform" label="플랫폼" required>
        <Input.SelectField
          id="platform"
          options={[{ value: -1, label: '플랫폼을 선택하세요' }, ...platformOptions]}
          {...register('platform', { required: true })}
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
          disabled={isPending}>
          취소
        </Button>
        <Button className="w-full" variant="primary" type="submit" disabled={isPending}>
          {isPending ? '등록 중...' : '등록하기'}
        </Button>
      </div>
    </form>
  );
};

export default CreatePromptForm;
