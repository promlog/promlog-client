import { Route, Routes } from 'react-router-dom';
import PromptListPage from './pages/PromptList/PromptListPage';
import Layout from './components/Layout/Layout';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PromptListPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
