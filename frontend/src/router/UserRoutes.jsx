import { Routes, Route } from 'react-router-dom';
import { Home, ProfileListing } from '@user/pages';
import UserLayout from '@user/layout/UserLayout';
import ProfileListing2 from '../user/pages/ProfileListing2';
import Register from '../user/pages/Register';
import Login from '../user/pages/Login';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/profile/unmarried-grooms" element={<ProfileListing2 />} />
                <Route path="/profile/unmarried-brides" element={<ProfileListing2 />} />
                <Route path="/profile/divorcee-grooms" element={<ProfileListing2 />} />
                <Route path="/profile/divorcee-brides" element={<ProfileListing2 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;