import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { AuthProvider } from './contexts/useAuth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
