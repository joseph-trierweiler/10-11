import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OrderButton  from './components/ordernow/orderNow';
import Navbar from './components/navbar/navbar';
import Rewards from './components/rewards/rewards';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        {/* <Navbar/> 
      <OrderButton />  */}
    </BrowserRouter>
  </React.StrictMode>
);


