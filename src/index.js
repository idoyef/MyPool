import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

const sendWebsiteVisitsCounter = () => {
  try {
    axios.get("https://api.countapi.xyz/hit/cupidclub.com");
  } catch (error) {
    console.log(error);
  }
};

ReactDOM.render(
  <React.StrictMode>
    {sendWebsiteVisitsCounter()}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
