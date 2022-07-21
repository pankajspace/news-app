import React, { useContext } from "react";
import PropTypes from "prop-types";
import purify from "dompurify";

import styles from "./NewsList.module.css";
import { validateURL, getPages } from "../../utils/utils";
import { loginContext } from "../../context/context";
import Pagination from "../Pagination/Pagination";

function NewsList({
  news,
  totalResults,
  searchQuery,
  handleSearch,
  loading,
  pageSizeState,
  selectedPageState,
}) {
  const { loggedIn, setLoggedIn } = useContext(loginContext);

  return (
    <>
      {!news.length && searchQuery && (
        <section className={styles.no_results}>
          <h3>No news found related to your search.</h3>
        </section>
      )}
      {loading && (
        <section className={styles.no_results}>
          <h3>Loading search results...</h3>
        </section>
      )}
      <section className={styles.news_container}>
        {news.length > 0 &&
          news.map((newsArticle) => (
            <article
              className={styles.news_item}
              key={newsArticle?.publishedAt}
            >
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={validateURL(newsArticle?.url) ? newsArticle?.url : ""}
                >
                  {newsArticle?.title}
                </a>
              </h4>
              <div>
                <h5>
                  {newsArticle?.source?.name} | {newsArticle?.author} |{" "}
                  {new Date(newsArticle?.publishedAt).toDateString()}
                </h5>
                <br />
                <div className={styles.content}>
                  <img
                    src={
                      validateURL(newsArticle?.urlToImage)
                        ? newsArticle?.urlToImage
                        : ""
                    }
                    alt={newsArticle?.title}
                  />
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: purify.sanitize(newsArticle?.description),
                    }}
                  ></p>
                </div>
              </div>
            </article>
          ))}
      </section>
      <Pagination
        searchQuery={searchQuery}
        totalResults={totalResults}
        pageSizeState={pageSizeState}
        selectedPageState={selectedPageState}
        handleSearch={handleSearch}
      ></Pagination>
    </>
  );
}

NewsList.propTypes = {
  news: PropTypes.array,
  totalResults: PropTypes.number,
  searchQuery: PropTypes.string,
  loading: PropTypes.bool,
  pageSizeState: PropTypes.number,
  selectedPageState: PropTypes.number,
  handleSearch: PropTypes.func.isRequired,
};

export default NewsList;
