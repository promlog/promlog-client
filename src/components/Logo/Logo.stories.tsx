import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import { BasicLogo, IconLogo } from './Logo';

const meta: Meta<typeof IconLogo> = {
  title: 'Components/Logo',
  component: IconLogo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    size: {
      description: '로고 아이콘 크기 설정',
      control: 'radio',
      options: ['md', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconLogo>;

export const IconOnly: Story = {
  args: {
    size: 'xl',
  },
};

export const Basic: StoryObj<typeof BasicLogo> = {
  render: (args) => <BasicLogo {...args} />,
};
