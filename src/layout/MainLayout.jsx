import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivateRoute from '../components/PrivateRoute';

const MainLayout = ({children}) => {


    return (
        <PrivateRoute>
            <div className="flex flex-col justify-between h-screen">
                <Navbar></Navbar>
                <main className="h-full overflow-auto mb-4">{children}</main>
                <Footer></Footer>
            </div>
        </PrivateRoute>
    )
}

export default MainLayout
