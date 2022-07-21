import { useState, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./App.module.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import { getNews } from "./service/service";
import { loginContext } from "./context/context";
import { change } from "./store/themeSlice";

const SearchInput = lazy(() => import("./components/Search/SearchInput"));
const NewsList = lazy(() => import("./components/NewsList/NewsList"));

function App() {
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageSizeState, setPageSizeState] = useState(5);
  const [selectedPageState, setSelectedPageState] = useState(1);

  const [loggedIn, setLoggedIn] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  async function handleSearch(searchTerm, pageNumber = 1, pageSize = 10) {
    setSelectedPageState(pageNumber);
    setPageSizeState(pageSize);
    setLoading(true);
    const searchResults = await getNews(searchTerm, pageNumber, pageSize);
    setLoading(false);
    setNews(searchResults?.data?.articles ?? []);
    setTotalResults(searchResults?.data?.totalResults ?? 0);
    setSearchQuery(searchTerm);
  }

  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
          <h2 className={styles.page_heading}>Search News</h2>
          {/* <input
          type="checkbox"
          name="theme"
          id="theme"
          value={theme}
          onChange={() => dispatch(change())}
        /> */}
          <SearchInput
            handleSearch={handleSearch}
            pageSizeState={pageSizeState}
          />
          <ErrorBoundary>
            <NewsList
              news={news}
              totalResults={totalResults}
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              loading={loading}
              pageSizeState={pageSizeState}
              selectedPageState={selectedPageState}
            />
          </ErrorBoundary>
        </loginContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
