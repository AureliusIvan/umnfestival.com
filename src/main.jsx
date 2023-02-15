import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Helmet is for SEO
  <HelmetProvider >
    {/* for redux*/}
    <Provider store={store}>
      {/* For React-Router */}
      <BrowserRouter>
        <div className="index">
          <App />
        </div>
      </BrowserRouter>
    </Provider >
  </HelmetProvider>
  ,
)
