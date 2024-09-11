import './index.scss';

import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom/client';
import {store} from './Redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
    // Helmet is for SEO
    <HelmetProvider>
      {/* for redux*/}
      <Provider store={store}>
        {/* For React-Router */}
        <BrowserRouter>
          <div className="index">
            <App/>
          </div>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>,
)