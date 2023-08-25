import React from "react";
import "./Rows.css";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Rows({ fetchUrl, title, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailUrl] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${fetchUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const handleClick = (movie) => {
    if (trailer) {
      setTrailUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="row__posters">
        {movies.map((data) => (
          <img
            onClick={() => handleClick(data)}
            className={`row-image ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? data.poster_path : data.backdrop_path
            }`}
            alt={data.names}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}{" "}
      </div>
    </div>
  );
}

export default Rows;
