import React, { Component } from "react";
import "./css/style.css";
import Items from "./Items";
import NavBar from "./NavBar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./cartReducer";

function App() {
  const store = createStore(cartReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </Provider>
    </div>
  );
}

export default App;
