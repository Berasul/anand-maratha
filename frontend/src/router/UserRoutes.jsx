import { Routes, Route } from 'react-router-dom';
import { Home, ProfileListing } from '@user/pages';
import UserLayout from '@user/layout/UserLayout';
import ProfileListing2 from '../user/pages/ProfileListing2';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/profile/unmarried-grooms" element={<ProfileListing2 />} />
                <Route path="/profile/unmarried-brides" element={<ProfileListing2 />} />
                <Route path="/profile/divorcee-grooms" element={<ProfileListing2 />} />
                <Route path="/profile/divorcee-brides" element={<ProfileListing2 />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;