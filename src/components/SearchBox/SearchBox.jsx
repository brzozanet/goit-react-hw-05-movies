import PropTypes from "prop-types";

export function SearchBox({ handleSearch }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search movies..."
        onKeyUp={(event) => {
          if (event.code === "Enter") {
            handleSearch(event.target.value);
          }
        }}
      />
    </>
  );
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
