import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Onama from '../src/pages/o-nama/o-nama';
import Kontakt from '../src/pages/kontakt/kontakt';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "pocetna",
//     element: <App />,
//   },
//   {
//     path: "o-nama",
//     element: <Onama />,
//   },
//   {
//     path: "kontakt",
//     element: <Kontakt />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
