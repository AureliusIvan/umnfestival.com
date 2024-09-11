import './index.scss';

import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom/client';
import {store} from './Redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <HelmetProvider>
          <Provider store={store}>
            <BrowserRouter>
              <div className="index">
                <App/>
              </div>
            </BrowserRouter>
          </Provider>
        </HelmetProvider>,
    )