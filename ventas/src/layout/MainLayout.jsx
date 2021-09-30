import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar></Navbar>
            <main className="h-full overflow-auto mb-4">{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
