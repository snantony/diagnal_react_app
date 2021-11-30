import React, { useState } from "react";

import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import HeaderSection from "./components/HeaderSection/HeaderSection.component";

import style from "./App.module.css";

const App = (props) => {
  const [pageNo, setPageNo] = useState(1);
  const [query, setQuery] = useState("");
  const [fetchType, setFetchType] = useState("scroll");

  return (
    <div>
      <HeaderSection query={query} setQuery={setQuery} setPageNo={setPageNo} setFetchType={setFetchType}/>
      <MovieListContainer pageNo={pageNo} setPageNo={setPageNo} query={query} fetchType={fetchType} setFetchType={setFetchType} />
    </div>
  );
};

export default App;
