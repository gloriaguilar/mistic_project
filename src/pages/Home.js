import Header from "../components/Layouts/Header/HeaderComponent";
import CoverComponent from "../components/Cover/CoverComponent";
import AboutComponent from "../components/About/AboutComponent";
import PortafolioCover from "../components/PortafolioCover/PortafolioCover";
import Footer from "../components/Layouts/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header />
            <CoverComponent />
            <AboutComponent />
            <PortafolioCover />
            <Footer />
        </div>
    )
}

export default Home;