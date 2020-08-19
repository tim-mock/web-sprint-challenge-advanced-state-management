import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from './reducer/Reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers( applyMiddleware(thunk)) )

console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
