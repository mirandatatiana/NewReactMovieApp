import { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { VolunteerActivism } from '@mui/icons-material';

const DetailsCardMovie = ({ dataa }) => {
  const { id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500"
  const params = useParams()

  const [dataDetails, setDataDetails] = useState("")
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=41514cf9c5004dbe47144dbf1928e39c`)
      .then(resp => resp.json())
      .then(data => setDataDetails(data))
  }, [id])

  let backdrop = `https://image.tmdb.org/t/p/w1280/${dataDetails.backdrop_path}`;

  return (
    <div className=' md:flex-col bg-gradient-to-r from-violet-900 to-fuchsia-800'>
      <NavBar />
      <div className=" xl:pt-20  flex flex-col md:flex-row ">
        <div className="xl:pb-36 detailMain pb-2 flex md:flex-col md:w-1/3  ml-8 mr-4 gap-10 lg:w-11/12 sm:auto">
          <div className="movieImgDiv md:flex-row rounded-lg">
            <img className="rounded-lg" src={backdrop} />
            <div className="imgTitle md:flex-row relative">
              <p className="text-purple-200 text-xl	">{dataDetails.tagline}</p>
            </div>
          </div>
        </div>
        <div className=' flex md:flex-row ml-8 mr-4 flex gap-10 lg:w-11/12 sm:auto'>
          <div className="imgDetails flex-col">
            <h2 className="md:text-2xl text-xl text-gray-50">
              {dataDetails.title}
            </h2>
            <div className="imgDetailsTop flex md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <p className="text-gray-300 text-xl">
                {dataDetails.overview}
              </p>
            </div>

            <div className="imgDetailsBottom flex flex-col gap-4">
              <p className="text-gray-400 text-xl">Type</p>
              <p className="text-gray-100 text-xl">Movie</p>
              <p className="text-gray-400 text-xl">Relase Date:</p>
              <p className="text-gray-100 text-xl">{dataDetails.release_date}</p>
              <p className="text-gray-400 text-xl">Run time</p>
              <p className="text-gray-100 text-xl">{dataDetails.runtime}</p>
              <p className="text-gray-400 text-xl">Vote Average</p>
              <p className="text-gray-100 text-xl">{dataDetails.vote_average}  </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );


};

export default DetailsCardMovie;