import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./custom.scss"

import './index.css'

import axios from "axios";

import {AuthContextProvider} from "./context/AuthContext";
import {SearchContextProvider} from "./context/SearchContext";

// configure axios baseURL
axios.defaults.baseURL = "http://localhost:8000/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
