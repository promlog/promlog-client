import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputLabel, TextLabel } from './Label';

const meta: Meta = {
  title: 'Components/Label',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '라벨 텍스트' },
    className: { control: 'text', description: '추가 스타일 (Tailwind Classes)' },
  },
};

export default meta;

export const InputLabelExample: StoryObj<typeof InputLabel> = {
  args: {
    children: '이메일 주소',
    required: true,
    htmlFor: 'email-input',
  },
  render: (args) => (
    <div className="flex flex-col gap-2 w-64">
      <InputLabel {...args} />
      <input
        id="email-input"
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="example@promlog.site"
      />
    </div>
  ),
};

export const TextLabelExample: StoryObj<typeof TextLabel> = {
  args: {
    children: '도움말 텍스트입니다',
  },
  render: (args) => (
    <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg">
      <TextLabel {...args} />
      <TextLabel className="text-red-500">에러가 발생했습니다</TextLabel>
    </div>
  ),
};
