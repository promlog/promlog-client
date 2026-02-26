import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const MOCK_CONTENT = {
  title: 'ChatGPT로 블로그 글 작성하기',
  createdAt: '2024.03.15',
  description:
    'SEO에 최적화된 블로그 글을 작성하기 위한 프롬프트입니다. 검색 엔진 노출을 극대화하면서도 독자가 읽기 쉬운 자연스러운 글을 작성할 수 있도록 구조화되어 있습니다.',
};

const MOCK_STATS = {
  viewCount: '1.2k',
  copyCount: 342,
  likeCount: 128,
};

const MOCK_BADGES = [
  { id: '1', name: ['글쓰기'], variant: 'platform' as const },
  { id: '2', name: ['chatGPT'], variant: 'category' as const },
];

const MOCK_ACTIONS = {
  likeAction: () => alert('좋아요 클릭'),
  bookmarkAction: () => alert('북마크 클릭'),
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-90 p-4 bg-gray-50/50">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    writer: { control: 'text', description: '작성자 이름' },
    content: { object: 'content', description: '제목, 날짜, 설명 객체' },
    stats: { object: 'stats', description: '조회수, 복사수, 좋아요수' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    id: 1,
    writer: 'DevMaster',
    badges: MOCK_BADGES,
    content: MOCK_CONTENT,
    stats: MOCK_STATS,
    actions: MOCK_ACTIONS,
  },
};
