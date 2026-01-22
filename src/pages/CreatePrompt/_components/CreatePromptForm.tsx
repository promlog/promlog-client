import Button from '../../../components/Button/Button';
import FormField from '../../../components/Form/FormField';
import { Input } from '../../../components/Input/Input';
import { CATEGORY_OPTIONS, PLATFORM_OPTIONS } from '../../../config/constants';

const CreatePromptForm = () => {
  return (
    <form className="space-y-6">
      <FormField htmlFor="title" label="제목" required>
        <Input.InputField id="title" placeholder="프롬프트 제목을 입력해 주세요" />
      </FormField>
      <FormField htmlFor="category" label="카테고리" required>
        <Input.SelectField id="category" options={CATEGORY_OPTIONS} />
      </FormField>
      <FormField htmlFor="platform" label="플랫폼" required>
        <Input.SelectField id="platform" options={PLATFORM_OPTIONS} />
      </FormField>
      <FormField htmlFor="body" label="프롬프트 내용" required>
        <Input.TextField id="body" placeholder="프롬프트 내용을 입력해 주세요" />
      </FormField>
      <FormField htmlFor="source" label="출처">
        <Input.InputField
          id="source"
          placeholder="링크를 입력해 주세요. (본인이라면 작성자로 표기)"
        />
      </FormField>
      <FormField htmlFor="tips" label="팁">
        <Input.InputField id="tips" placeholder="프롬프트 사용 팁을 입력해 주세요" />
      </FormField>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="anonymous"
          name="anonymous"
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
        />
        <label htmlFor="anonymous" className="text-gray-700 cursor-pointer">
          익명으로 등록
        </label>
      </div>
      <div className="flex items-center gap-3 pt-4">
        <Button className="w-full" variant="secondary" type="button">
          취소
        </Button>
        <Button className="w-full" variant="primary" type="submit">
          등록하기
        </Button>
      </div>
    </form>
  );
};

export default CreatePromptForm;
