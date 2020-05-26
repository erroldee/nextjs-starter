import React from "react";
import "../src/styles/global.css";

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};

export default App;