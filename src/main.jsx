import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider >
    <Provider store={store}>
      <BrowserRouter>
        <div className="index">
          <App />
        </div>
      </BrowserRouter>
    </Provider >
  </HelmetProvider>
  ,
)
