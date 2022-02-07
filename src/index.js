import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/app';
import "./Components/index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./Components/Responsive/responsive.css";
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));