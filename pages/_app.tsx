import React from "react";
import "../src/App.css";

export default function App({ Component, pageProps }) {
  return <Component className="App" {...pageProps} />;
}
