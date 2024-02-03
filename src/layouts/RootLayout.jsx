import css from "./RootLayout.module.css";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import PropTypes from "prop-types";
import tmdbLogo from "../images/tmdb-logo-3-cropped.png";

export function RootLayout({ children }) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <header className={css.menu_bar}>
          <NavLink to="/">
            <img src={tmdbLogo} alt="The Movie Database" height="80" />
          </NavLink>
          <ul className={css.menu_list}>
            <li className={css.menu_item}>
              <NavLink className={css.menu_title} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.menu_item}>
              <NavLink className={css.menu_title} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </header>
        {children}
      </Suspense>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
