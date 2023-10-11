import { useState, useEffect } from "react"
import CardItem from "./CardItemsMovie"
import "./App.css"
import { Pagination } from "@mui/material"
import NavBar from "./NavBar"
import Footer from "./Footer"

//Function fot Top Rated
const NowPlaying = () => {
    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=41514cf9c5004dbe47144dbf1928e39c&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })
    }, [page])

    return (
        <div className="toprated bg-gradient-to-r from-violet-900 to-fuchsia-800">
            <NavBar />
            <div className="popular bg-gradient-to-r from-violet-900 to-fuchsia-800">
                {movies.map(movie => (
                    <CardItem key={movie.id}
                        title={movie.title}
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        link={`/${movie.id}`} />
                ))}
            </div>
         <div className="pagination bg-gradient-to-r from-violet-900 to-fuchsia-800">
            <Pagination
            variant="outlined"
                color="secondary"
         size="large"
                count={totalPages > 500 ? 500 : totalPages}
                page={page}
                onChange={handleChange}
            />
            </div>
           <Footer/>
        </div>
    )
}

export default NowPlaying