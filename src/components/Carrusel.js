import { useState, useRef, useEffect } from 'react';

const Carousel = () => {

  const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])  
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  
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

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
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
    <div className="carousel duration-700 bg-gradient-to-r from-violet-900 to-fuchsia-800  mx-auto pb-20">
      <div className="relative bg-gradient-to-r from-violet-900 to-fuchsia-800 overflow-hidden">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div ref={carousel} className="carousel-container animate-scroll relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0" >
       
          {movies.map((movie, index) => {
            return (
              <div key={index} className="carousel-item text-center h-screen relative w-50 h-80  snap-start">
                <a
                   img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="h-full w-full aspect-[2/3] block bg-cover bg-center bg-no-repeat z-0 rounded-lg"
                  
                  style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie.poster_path + "\")"} }                 >
                  <img
                    src={movie.id}
                    alt={movie.title}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    
                    className="w-full h-full hidden"
                  />
                </a>
                <a
                    href={movie.id}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-5 bg-white z-10 rounded-lg"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {movie.title}
                  </h3>
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Carousel;