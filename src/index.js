import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';

import {
  Home,
  RequestPage,
  Ads,
  Sell,
  SignUp,
  IndividualAd,
  Account,
  Login
} from './views';
import {AuthProvider} from './store/contexts/authContext'
import {AdProvider} from './store/contexts/adContext'
import {MyAdProvider} from './store/contexts/myAdContext'
import {RequestProvider} from './store/contexts/requestContext'
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <RequestProvider>
    <AdProvider>
    <MyAdProvider>  
      <Router>
        <Routes>
          <Route  path="/" element={<App/>} >
            <Route  path="/" element={<Home/>} />
            <Route  path="/account" element={<Account/>} />
            <Route  path="/sell" element={<Sell/>} />
            <Route  path="/ads" element={<Ads/>} />
            <Route  path="/ads/:id" element={<IndividualAd/>} />
            <Route  path="/myrequests" element={<RequestPage/>} />
          </Route>   
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>  
      </Router>
    </MyAdProvider>  
    </AdProvider> 
    </RequestProvider> 
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
