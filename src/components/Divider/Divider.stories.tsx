import type { Meta, StoryObj } from '@storybook/react-vite';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '구분선 방향 결정',
    },
    className: {
      control: 'text',
      description: '색상이나 여백 커스텀 시 사용',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-full p-4 flex flex-col gap-3">
      <p className="text-sm text-gray-600">위쪽 콘텐츠</p>
      <Divider {...args} />
      <p className="text-sm text-gray-600">아래쪽 콘텐츠</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex items-center h-10 px-4 gap-3">
      <span className="text-sm">메뉴 1</span>
      <Divider {...args} />
      <span className="text-sm">메뉴 2</span>
      <Divider {...args} />
      <span className="text-sm font-bold text-blue-600">메뉴 3</span>
    </div>
  ),
};
