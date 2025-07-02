import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <main>
                <Header />
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
