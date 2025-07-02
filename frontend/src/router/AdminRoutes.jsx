import { Routes, Route } from 'react-router-dom';
import { Login } from '@admin/pages';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/login" element={<Login />} />
        </Routes>
    );
};

export default AdminRoutes;
