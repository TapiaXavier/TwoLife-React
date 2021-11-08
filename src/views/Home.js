import { NavBar } from '../components/NavBar'
import { Portada } from '../components/home/Portada'
import Footer from '../components/Footer';
import Latests from '../components/home/Latests';
import Populars from '../components/home/Populars';

function Home() {
    return (
        <>
            <NavBar />
            <Portada />
            <Populars />
            <Latests />
            <Footer />
        </>
    );
}

export default Home;