import React from "react";
import PropTypes from "prop-types";

import { getPages } from "../../utils/utils";
import styles from "./Pagination.module.css";

function Pagination({
  totalResults,
  pageSizeState,
  selectedPageState,
  searchQuery,
  handleSearch,
}) {
  const [selectedPageSize, setSelectedPageSize] = React.useState(pageSizeState);
  const [startPage, setStartPage] = React.useState(1);
  const [endPage, setEndPage] = React.useState(10);

  const noOfPages = getPages(totalResults, 10);

  const handlePageSizeChange = (pageSize) => {
    if (parseInt(pageSize) !== -1) {
      setSelectedPageSize(pageSize);
      searchQuery.length && handleSearch(searchQuery, 1, pageSize);
    }
  };

  const handlePageChange = (pageNumber) => {
    searchQuery.length &&
      handleSearch(searchQuery, pageNumber, selectedPageSize);
  };

  const handlePagination = (action) => {
    switch (action) {
      case "first":
        setStartPage(1);
        setEndPage(10);
        break;

      case "next":
        if (endPage < noOfPages) {
          setStartPage(startPage + 10);
          setEndPage(endPage + 10);
        }
        break;

      case "prev":
        if (startPage > 1) {
          setStartPage(startPage - 10);
          setEndPage(endPage - 10);
        }
        break;

      case "last":
        setStartPage(noOfPages - 10);
        setEndPage(noOfPages);
        break;

      default:
        break;
    }
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          className={`${styles.pagination_button} ${
            i === selectedPageState && styles.button_selected
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  const renderPageDropdown = () => {
    return [5, 10, 20].map((page) => (
      <option key={page} value={page}>
        {page}
      </option>
    ));
  };

  return (
    <>
      {searchQuery && (
        <section className={styles.pagination_container}>
          <div className={styles.pagination_text}>
            <select
              name="pages"
              id="pages"
              onChange={(e) => handlePageSizeChange(e.target.value)}
              value={selectedPageSize}
            >
              <option value="-1">Select Page Size</option>
              {renderPageDropdown()}
            </select>
          </div>
          <button
            className={`${styles.pagination_button}`}
            onClick={() => handlePagination("first")}
            disabled={noOfPages === 1}
          >
            First Page
          </button>
          <button
            className={`${styles.pagination_button}`}
            onClick={() => handlePagination("prev")}
            disabled={startPage === 1}
          >
            Prev 10
          </button>
          {renderPagination()}
          <button
            className={`${styles.pagination_button}`}
            onClick={() => handlePagination("next")}
          >
            Next 10
          </button>
          <button
            className={`${styles.pagination_button}`}
            onClick={() => handlePagination("last")}
            disabled={noOfPages === 1}
          >
            Last Page
          </button>
        </section>
      )}
    </>
  );
}

Pagination.propTypes = {
  totalResults: PropTypes.number,
  pageSizeState: PropTypes.number,
  selectedPageState: PropTypes.number,
  searchQuery: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};

export default Pagination;
