import "./App.css";
import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
