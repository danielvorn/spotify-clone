import { useEffect, useState} from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import "../Styles/Footer.css"
import {Grid, Slider} from "@material-ui/core"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img 
        className="footer__albumLogo"
        src="https://upload.wikimedia.org/wikipedia/en/d/db/Pop_Smoke_-_Shoot_for_the_Stars_Deluxe_Cover.png" alt=""/>
        <div className="footer__songInfo">
          <h4>What You Know bout Love</h4>
          <p>Pop Smoke</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;