import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import KakaoCallbackPage from './pages/Auth/KakaoCallbackPage';
import CreatePromptPage from './pages/CreatePrompt/CreatePromptPage';
import PromptDetailPage from './pages/PromptDetail/PromptDetailPage';
import PromptListPage from './pages/PromptList/PromptListPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PromptListPage />} />
        <Route path="/prompts/:promptId" element={<PromptDetailPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallbackPage />} />
        <Route path="/write" element={<CreatePromptPage />} />
        <Route path="/prompts/:promptId/edit" element={<CreatePromptPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
