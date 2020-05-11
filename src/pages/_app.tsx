import React from "react";
import { NextPage } from "next";
import { SomeContextProvider } from "../SomeContext";
import "../styles.css";

const App: NextPage<any> = ({ Component, pageProps }) => (
  <SomeContextProvider>
    <Component {...pageProps} />
  </SomeContextProvider>
);

export default App;
