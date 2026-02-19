import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'destructive',
        'outline',
        'ghost',
      ],
    },
    size: {
      description: '버튼 크기 결정',
      control: 'inline-radio',
      options: ['xs', 'sm', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    isActive: {
      control: 'boolean',
      description: '버튼 클릭 여부',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    onClick: () => alert('버튼 클릭'),
  },
};
