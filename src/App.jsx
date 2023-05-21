import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Router from "./router/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/UI/Header";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Header/>
          <Router/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
