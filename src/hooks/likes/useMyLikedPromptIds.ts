import { useQuery } from '@tanstack/react-query';

import { getMyLikedPromptIds } from '../../apis/prompts/prompts';
import { useAuth } from '../../contexts/useAuth';

const useMyLikedPromptIds = () => {
  const { isLoggedIn } = useAuth();

  const { data } = useQuery({
    queryKey: ['prompts', 'me', 'likes'],
    queryFn: getMyLikedPromptIds,
    enabled: isLoggedIn,
    staleTime: 30_000,
  });

  return { likedIds: data ?? [] };
};

export default useMyLikedPromptIds;
