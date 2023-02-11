import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
// import cursor from "./Asset/Image/OtherIcon/cursor.png";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <div className="index">
        <App />
      </div>
    </BrowserRouter>
  </Provider >
  //</React.StrictMode> 
  ,
)
