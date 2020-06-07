import React, { Fragment } from "react";
import { SearchBar } from "./components";
import youtube from "./api/youtube";

const App = () => {
  return (
    <Fragment>
      <h1>First Order Component</h1>
      <SearchBar />
    </Fragment>
  );
};

export default App;
