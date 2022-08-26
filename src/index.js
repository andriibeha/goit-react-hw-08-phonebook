import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App/App"
import store from "./store/index";
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="https://andriibeha.github.io/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

