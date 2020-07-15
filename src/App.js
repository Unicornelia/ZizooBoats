import React from "react";
import logo from "./images/zizoo-blue.svg";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
import BoatsContainer from './Pages/BoatsContainer/BoatsContainer'

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img src={logo} className="header_top_logo" alt="zizoo-logo" />
        </a>
        <span>The leading global boat rental platform</span>
        <div className={"header_top_right"}>
          <span style={{marginRight: '10px'}}>Mon-Sun: 9-9pm CET</span>
          <FaPhoneAlt color="#014b67" size={20}/>
          <span className="header_top_phone">+44 20 3318 3641</span>
        </div>
      </header>
      <BoatsContainer />
    </div>
  );
}

export default App;
