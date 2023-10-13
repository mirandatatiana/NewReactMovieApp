import { useState, useRef, useEffect } from 'react';
const ListMoviesUpComing = () => {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=41514cf9c5004dbe47144dbf1928e39c")
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  //Configuration of the next and previous arrows 
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel bg-gradient-to-r from-violet-900 to-fuchsia-800  mx-auto pb-20">
      <div className='flex items-center px-12 bg-transparent border-gray-300 py-10'>
        <h2 className=" text-4xl text-white flex items-center space-x-2 flex-grow ">
          Up Coming
        </h2>
        <button className='text-xl text-white md:flex lg:flex space-x-3 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-violet-950/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ' >
          <a href='./topRated'
          > See More </a>
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-violet-950/50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-violet-950/50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div ref={carousel} className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0  space-x-4" >

          {movies.map((movie, index) => {
            return (
              <div key={index} className="carousel-item text-center relative w-80 h-80 snap-start  ">
                <a
                  href={movie.id}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-10 bg-white z-10 rounded-lg"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {movie.title}
                  </h3>
                </a>
                <button
                  img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="h-full w-full aspect-[2/3] block bg-cover bg-no-repeat z-0 rounded-lg"

                  style={{ backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie.poster_path + "\")" }}                 >
                  <img
                    src={movie.id}
                    alt={movie.title}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}

                    className="w-full h-full hidden"
                  />
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListMoviesUpComing;