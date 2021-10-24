import React, { Fragment } from "react";
import Loading from "../components/common/loading";
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
