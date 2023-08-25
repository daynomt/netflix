import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${requests.fetchNetflix0riginals}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      });
  }, []);
  console.log(movie);
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__contents">
            <button className="banner__buttons">Play</button>
            <button className="banner__buttons">My list</button>
          </div>
          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </div>
    </div>
  );
}

export default Banner;
