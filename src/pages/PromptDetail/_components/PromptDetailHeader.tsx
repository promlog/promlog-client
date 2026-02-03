import { useMemo, useState } from 'react';

import Badge from '../../../components/Badge/Badge';
import Button from '../../../components/Button/Button';
import { TextLabel } from '../../../components/Label/Label';

import { useAuth } from '../../../contexts/useAuth';
import useLikePrompt from '../../../hooks/likes/useLikePrompt';
import useMyLikedPromptIds from '../../../hooks/likes/useMyLikedPromptIds';

import type { PromptDTO } from '../../../mappers/promptMapper';
import { Dialog } from '../../../components/NavigationBar/_components/Dialog';

interface PromptDetailHeaderProps {
  prompt: PromptDTO;
}

const PromptDetailHeader = ({ prompt }: PromptDetailHeaderProps) => {
  const { isLoggedIn } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { id, content, stats, tags, author } = prompt;

  const { likedIds } = useMyLikedPromptIds();
  const { mutate: toggleLike } = useLikePrompt();

  const isLiked = useMemo(() => {
    return likedIds.includes(id);
  }, [likedIds, id]);

  const actions = {
    likeAction: () => {
      if (!isLoggedIn) {
        setIsLoginModalOpen(true);
        return;
      }

      toggleLike({
        promptId: id,
        isLiked: isLiked,
      });
    },
    bookmarkAction: () => alert('북마크 기능 준비 중'),
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4 flex-col">
          <h1 className="text-[2rem] font-bold text-gray-900 leading-tight flex-1">
            {content.title}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="category">{tags.category}</Badge>
            <Badge variant="platform">{tags.platform}</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 gap-4 text-sm">
            <TextLabel icon="view">조회 {stats.viewCount}</TextLabel>
            <TextLabel icon="copy">복사 {stats.copyCount}</TextLabel>
            <TextLabel icon="calendar">{content.createdAt}</TextLabel>
            <TextLabel>작성자: {author.nickname}</TextLabel>
          </div>
          <div className="flex gap-2">
            <Button
              icon="heart"
              variant="tertiary"
              size="sm"
              isActive={isLiked}
              onClick={actions.likeAction}>
              {stats.likeCount}
            </Button>
            <Button
              icon="bookmark"
              variant="tertiary"
              size="sm"
              isActive={false}
              onClick={actions.bookmarkAction}>
              저장
            </Button>
          </div>
        </div>
      </div>
      <Dialog.Login open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </>
  );
};

export default PromptDetailHeader;
