import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export function RootLayout({ children }) {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to="/movies">Movies</NavLink>
      {children}
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
