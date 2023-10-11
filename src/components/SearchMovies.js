  // import { useEffect, useState } from "react";
  // import { useParams } from "react-router-dom";
  // import NavBar from "./NavBar";
  // import CardItem from "./CardItems";
  // import { Pagination } from "@mui/material"
  // // ESTA ES DE LA SECCION DE BUSCAR PELICULA
  // // Function for Search Movies
  // const SearchMovies = () => {
  //     const params = useParams("")
  //     const [page, setPage] = useState(1);
  //     const handleChange = (event, value) => {
  //         setPage(value);
  //     };
  //     const [movies, setMovies] = useState([])
  //     const [totalPages, setTotalPages] = useState(1)

  //     // Fetch Movies
  //     useEffect(() => {
  //         fetch(`https://api.themoviedb.org/3/search/movie?api_key=41514cf9c5004dbe47144dbf1928e39c&query=${params.movie}&page=${page}`)
  //             .then(res => res.json())
  //             .then(data => {
  //                 setMovies(data.results)
  //                 setTotalPages(data.total_pages)
  //             })

  //     }, [page, params.movie])

  //     return (
  //         <div>
  //             <NavBar />
  //             <div className="popular">
          
  //                        <div className="bg-white">
  //                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //                          <h2 className="sr-only">Movies</h2>
                  
  //                          <div className="grsgrid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  //                            {movies.map((movie) => (
  //                              <a key={movie.id} href={movie.href} className="group">
  //                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  //                                  <img
  //                                    src={movie.imageSrc}
  //                                    alt={movie.imageAlt}
  //                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
  //                                  />
  //                                </div>
  //                                <h3 className="mt-4 text-sm text-gray-700">{movie.name}</h3>

  //                              </a>
  //                            ))}
  //                          </div>
  //                        </div>
  //                      </div>
          
  //             </div>
  //             <Pagination
  //                 count={totalPages > 500 ? 500 : totalPages}
  //                 page={page}
  //                 onChange={handleChange}
  //             />
  //         </div>
  //     )


  // }
  // export default SearchMovies


