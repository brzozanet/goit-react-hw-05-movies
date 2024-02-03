import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
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
        setMovieDetails(response);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.tagline}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
        title={movieDetails.title}
        width="500"
      />
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <p>Release date: {movieDetails.release_date}</p>
      <p>User score: {movieDetails.vote_average}</p>
      <Link to={"cast"}>Cast</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to={"reviews"}>Reviews</Link>
      <Outlet />
    </>
  );
}
