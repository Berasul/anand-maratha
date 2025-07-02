import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './router/AdminRoutes';
import UserRoutes from './router/UserRoutes';

function App() {
  return (
    <BrowserRouter>
      <AdminRoutes />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
