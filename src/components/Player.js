import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "../Styles/Player.css"

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar/> 
        <Body spotify={spotify}/>
      </div>
      <Footer/>
      {/*footer*/}
    </div>
  );
}

export default Player;