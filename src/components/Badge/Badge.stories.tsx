import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      description: '배지 크기 설정',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'radio',
      options: ['category', 'platform'],
      description: '배지의 의미론적 스타일 설정',
    },
    children: {
      control: 'text',
      description: '배지에 표시될 텍스트',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'category',
    size: 'md',
    children: 'Badge',
  },
};
