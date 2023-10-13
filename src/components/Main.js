import ListMoviesTopRated from "./ListMoviesTopRated";
import NavBar from "./NavBar";
import Carrousel from "./Carrusel";
import Footer from "./Footer"
import ListMoviesUpComing from "./ListMoviesUpComing";
const Main = () => {

    return (
        //Main
        <div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="">
                <Carrousel />
            </div>
            <div className="">
                <ListMoviesTopRated title="Top Rated Movies" />
            </div>
            <div className="">
                <ListMoviesUpComing title="Now Playing Movies" />
            </div>
            <div className="">
                <Footer title="" />
            </div>
        </div>
    )
}
export default Main