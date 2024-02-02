import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjA5NmFkZmMwMmIxZDk1MDNjY2EzOTY3MWYxOTYxOCIsInN1YiI6IjY0NjY3MGJhZDE4NTcyMDEwMTk2YzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5Zu5ba5gw74fGGBNm2CovduoufddrTKHZqKyun9LX0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
        title={movie.title}
        width="500"
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>User score: {movie.vote_average}</p>
    </>
  );
}
