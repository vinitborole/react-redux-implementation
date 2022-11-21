import "./App.css";
import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
