import { Route, Routes } from 'react-router-dom';
import PromptListPage from './pages/PromptList/PromptListPage';
import Layout from './components/Layout/Layout';
import PromptDetailPage from './pages/PromptDetail/PromptDetailPage';
import KakaoCallbackPage from './pages/Auth/KakaoCallbackPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PromptListPage />} />
        <Route path="/:promptId" element={<PromptDetailPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallbackPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
