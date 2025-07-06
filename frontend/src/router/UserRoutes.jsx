import { Routes, Route } from 'react-router-dom';
import { Home, ProfileListing } from '@user/pages';
import UserLayout from '@user/layout/UserLayout';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/profile/unmarried-grooms" element={<ProfileListing />} />
                <Route path="/profile/unmarried-brides" element={<ProfileListing />} />
                <Route path="/profile/divorcee-grooms" element={<ProfileListing />} />
                <Route path="/profile/divorcee-brides" element={<ProfileListing />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;