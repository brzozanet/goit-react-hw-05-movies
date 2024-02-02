import { MovieItem } from "../MovieItem/MovieItem";
import css from "./MoviesList.module.css";
import PropTypes from "prop-types";

export function MoviesList({ movies }) {
  return (
    <>
      <h2>Hello MoviesList!</h2>
      <ul className={css.movies_list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={css.movies_item}>
              <div className={css.moviebox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.title}
                  width="260"
                />
                <p className={css.title}>{movie.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <MovieItem movies={movies} />
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
