import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieCredits(response.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {movieCredits.map((credit) => (
          <li key={credit.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
              alt={credit.name}
              title={credit.name}
              width="150"
            />
            <p>{credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
