import React, { memo, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.module.css";
import { loginContext } from "../../context/context";

const SearchInput = memo(({ handleSearch, pageSizeState }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const { loggedIn, setLoggedIn } = useContext(loginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoggedIn(true);
    searchTerm &&
      searchTerm.trim().length &&
      handleSearch(searchTerm, 1, pageSizeState);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.search_container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.search_box}
          placeholder="Search news"
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
});

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchInput;
