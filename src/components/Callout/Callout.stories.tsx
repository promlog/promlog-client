import type { Meta, StoryObj } from '@storybook/react-vite';

import Callout from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['attentive', 'destructive'],
      description: 'Callout의 목적 및 의미 결정',
    },
    title: {
      control: 'text',
      description: '콜아웃 타이틀',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    variant: 'attentive',
    title: '알림',
    children: '강조할 내용이 있을 경우 사용합니다.',
  },
};

/**
 * Callout.Text와 Callout.List를 조합하여 구조적인 정보를 전달합니다.
 * variant는 부모에게만 전달하면 자식들이 알아서 스타일을 상속받습니다.
 */
export const WithList: Story = {
  render: (args) => (
    <Callout {...args}>
      <Callout.List>
        <Callout.Item>
          작성한 모든 프롬프트는 삭제되지 않으며, 작성자가 '탈퇴한 사용자'로
          표시됩니다.
        </Callout.Item>
        <Callout.Item>
          탈퇴 후 동일한 계정으로 7일간 재가입이 불가능합니다.
        </Callout.Item>
        <Callout.Item>
          탈퇴 처리 후에는 회원 정보를 복구할 수 없습니다.
        </Callout.Item>
      </Callout.List>
    </Callout>
  ),
  args: {
    variant: 'destructive',
    title: '주의 사항',
  },
};
