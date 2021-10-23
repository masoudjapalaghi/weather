import React, { Fragment } from "react";
import Loading from "../utils/loading";
import Weather from "./weather";

const App = () => {
  return (
    <Fragment>
      <Weather />
      <Loading />
    </Fragment>
  );
};

export default App;
