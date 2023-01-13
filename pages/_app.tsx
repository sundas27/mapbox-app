import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';  
import "../src/global.css";

export default function App({ Component, pageProps }) {
  return( 
  
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Component {...pageProps} />
  </ThemeProvider>
  )
}
