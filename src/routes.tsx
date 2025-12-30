import { Route, Routes } from 'react-router-dom';
import PromptListPage from './pages/PromptList/PromptListPage';
import Layout from './components/Layout/Layout';
import PromptDetailPage from './pages/PromptDetail/PromptDetailPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PromptListPage />} />
        <Route path="/:promptId" element={<PromptDetailPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
