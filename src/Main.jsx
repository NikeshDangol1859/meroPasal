import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './style/style.css'



ReactDom.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <App/>
  </BrowserRouter>
)