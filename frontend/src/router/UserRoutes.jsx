import { Routes, Route } from 'react-router-dom';
import { Home } from '@user/pages';
import UserLayout from '@user/layout/UserLayout';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;